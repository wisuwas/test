const axios = require('axios');

const {
  dtacSmeApi
} = require('./config');

module.exports = (logger) => {
  const passport = require('passport')
    , JsonStrategy = require('passport-json').Strategy;

  passport.use(new JsonStrategy(
    {
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      if (!username) {
        return done(null, false, { message: 'Require username.' });
      }
      if (!password) {
        return done(null, false, { message: 'Require password.' });
      }

      // todo: create login service
      try {
        logger.info(`request login: ${username}`, req);

        const response = await axios.post(
          dtacSmeApi + '/login',
          { username, password }
        );

        logger.info(`success login: ${username}`, req);

        const json = response.data;
        return done(null, json.user);
      } catch (e) {
        if (e.response && e.response.status === 401) {
          logger.warn(`incorrect username or password: ${username}`, req);

          return done(null, false, { message: 'Username or password is incorrect.' })
        }

        logger.error(`an expection\'s thrown for ${e.message}`, req);

        return done(null, false, e);
      }
    }
  ));

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));

  return passport;
};
