// log
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

const moment = require('moment-timezone');

const { format } = winston;
const { combine, timestamp, printf } = format;

const appendTimestamp = format((info, opts) => {
  if(opts.tz)
    info.timestamp = moment().tz(opts.tz).format();
  return info;
});

const timezone = moment.tz.guess();

// datetime|Priority|Transaction|MSISDN|IP Address|Message Type|Message
const dtacFormat = printf((info) => `${info.timestamp}|${info.level}|${info.message}`);

const getLogger = (logDirectory = './logs') => {
  const logger = winston.createLogger({
    format: combine(
      appendTimestamp({ tz: timezone }),
      dtacFormat,
    ),
    transports: [
      new DailyRotateFile({
        filename: path.join(logDirectory, 'smeweb_DEBUG.log'),
        datePattern: 'YYYYMMDD'
      }),
    ],
    exitOnError: false
  });

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }

  return logger;
};

module.exports = getLogger;
