const express = require('express');
const next = require('next');
const routes = require('../routes');
const bodyParser = require('body-parser');
const uuidv1 = require('uuid/v1');
const { ipv6toIpv4 } = require('./helpers');

const dev = process.env.NODE_ENV !== 'production';

const {
  port,
  logDirectory,
} = require('./config');

const logger = require('./getLogger')(logDirectory);

const passport = require('./createPassport')(logger);

// server log
const moment = require('moment-timezone');

const timezone = moment.tz.guess();

const morgan = require('morgan');

morgan.token('date', (req, res, tz) => {
  return moment().tz(tz).format();
});
const {
  smeweb_TXLogStream
} = require('./getLogStream')(logDirectory);

const initSessionDb = require('./initSessionDb');

const session = require('express-session');
const LevelStore = require('level-session-store')(session);

const app = next({ dev });

const handler = routes.getRequestHandler(app);

const sessionStoragePath = './session-db-storage';

const createApiRoute = require('./createApiRoute');

const createTransaction = (req, res, next) => {
  req.tid = uuidv1();
  next();
};

const getXForwardFor = (req, res, next) => {
  req.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  next();
};

const addLogger = (req, res, next) => {
  req.logger = logger;
  next();
};

app.prepare().then(async () => {
  await initSessionDb(sessionStoragePath);

  const server = express();

  server.use(session({
    store: new LevelStore(sessionStoragePath),
    secret: 'Sheep is awesome!',
    resave: true,
    saveUninitialized: true,
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: 30 * 60 * 1000 // 30 min
    }
  }));

  server.get('/health-check', (req, res) => {
    res.send(`online - ${process.env.NODE_ENV} - ${(new Date()).toString()}`);
  });

  const apiRoute = createApiRoute(passport, logger);

  server.use(createTransaction);

  server.use(getXForwardFor);

  server.use(addLogger);

  morgan.token('tid', req => req.tid);

  morgan.token('ipAddress', req => ipv6toIpv4(req.headers['x-forwarded-for'] || req.connection.remoteAddress));

  morgan.token('statusMessage', (req, res) => res.statusMessage);

  const dtacPattern = `:date[${timezone}]|:tid||:ipAddress|smeweb-fe|:method :url|:status|:statusMessage|:response-time`;

  server.use(morgan(dtacPattern, { stream: smeweb_TXLogStream , skip: (req,res) => res.statusCode == 304 }));

  server.use(bodyParser.json());

  server.use(passport.initialize());

  server.use(passport.session());

  server.use('/api', apiRoute);

  server.use(handler);

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`);
  });
});
