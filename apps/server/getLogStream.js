const fs = require('fs');
const rfs = require('rotating-file-stream');

function pad(num) {
  return (num > 9 ? "" : "0") + num;
}

// make it elegant, if have time
function generator(time) {
  if(! time)
    return "smeweb_TX.log";

  var month  = time.getFullYear() + "" + pad(time.getMonth() + 1);
  var day    = pad(time.getDate());

  return `smeweb_TX.log.${month+day}`;
}

const getLogStream = (logDirectory = './logs') => {
  // ensure log directory exists
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

  return {
    smeweb_TXLogStream: rfs(generator, {
      interval: '1d', // rotate daily
      path: logDirectory
    })
  };
};

module.exports = getLogStream;
