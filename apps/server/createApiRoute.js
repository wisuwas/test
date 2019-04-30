const express = require('express');

const csrf = require('csurf');
const csrfProtection = csrf();
const {
  createLoginResponse,
  errorHandler,
  ipv6toIpv4
} = require('./helpers');
const axios = require('axios');

const {
  dtacSmeApi
} = require('./config');

const logTemplate = (tid, ip, msg, msgType) => `${tid}||${ipv6toIpv4(ip)}|${msgType ? msgType : 'PROC'}|${msg}`;

// Middleware
const isAuthenticated = (req, res, next) => {
  if (!!req.user)
    return next();

  res.status(401).send('Unauthorized request.');
};

module.exports = (passport) => {
  const apiRoute = express.Router();

  apiRoute.get('/csrftoken', csrfProtection, (req, res) => {
    req.logger.info(logTemplate(req.tid, req.ip, 'get csrf token', 'INPUT'));
    res.send({
      tokenName: 'csrf-token',
      token: req.csrfToken()
    });
  });

  apiRoute.post(
    '/login/validate',
    csrfProtection,
    (req, res) => res.send(createLoginResponse(req.user))
  );

  apiRoute.post(
    '/login',
    csrfProtection,
    passport.authenticate('json'),
    (req, res) => {
      req.logger.info(logTemplate(req.tid, req.ip, 'login','INPUT'));
      res.send(createLoginResponse(req.user))
    }
  );

  apiRoute.post(
    '/signout',
    csrfProtection,
    (req, res) => {
      req.logger.info(logTemplate(req.tid, req.ip, 'signout','INPUT'));
      req.logout();
      res.sendStatus(205);
    }
  );

  ['/customer', '/dealer'].map((item) => {
    apiRoute.post(
      item,
      csrfProtection,
      async (req, res) => {
        const getTemplateErrMsg = (action) => (errorMessage) => logTemplate(req.tid, req.ip, `${errorMessage} ${action} to store info in ${item}`);
        try {
          req.logger.info(logTemplate(req.tid, req.ip, 'request','INPUT'));

          const response = await axios.post(
            dtacSmeApi + item,
            req.body
          );

          const data = response.data;
          if (data < 1) {
            req.logger.info(logTemplate(req.tid, req.ip, 'fail'));

            res.sendStatus(500);
            return;
          }

          req.logger.info(logTemplate(req.tid, req.ip, 'success'));

          res.send(response.data);
        } catch (e) {
          errorHandler(
            e,
            res,
            req,
            getTemplateErrMsg('error'),
          );
        }
      }
    );

    apiRoute.get(
      `${item}/page/:pageIndex`,
      csrfProtection,
      isAuthenticated,
      async (req, res) => {
        const pageIndex = req.params.pageIndex;
        const getTemplatePageMsg = (action) => (errorMessage) => `${errorMessage}${action} to get page: ${item}/page/${pageIndex}`;
        try {
          req.logger.info(logTemplate(req.tid, req.ip, getTemplatePageMsg('request')(''),'INPUT'));

          const response = await axios.get(
            dtacSmeApi + `${item}/page/${pageIndex}`,
            req.body
          );

          req.logger.info(logTemplate(req.tid, req.ip, getTemplatePageMsg('success')('')));

          res.send(response.data);
        } catch (e) {
          errorHandler(
            e,
            res,
            req,
            getTemplatePageMsg('error')
          );
        }
      }
    );
  });

  return apiRoute;
};
