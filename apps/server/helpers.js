// helper
const createLoginResponse = (user) => ({
  user: user || null,
  isAuthenticated: !!user,
});

const errorHandler = (e, res, req, templateErrMsg) => {
  if (e.response) {
    const errorRes = e.response;
    req.logger.error(templateErrMsg(`[${errorRes.status}: ${e.statusText}]`));

    res.status(errorRes.status).send(e.statusText);
    return;
  }

  req.logger.error(templateErrMsg(`[500: ${e.message}]`));
  res.status(500).send('Internal server error.');
};

const ipRegex = /^(?!.*\.$)((?!0\d)(1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

const ipv6toIpv4 = (ip) => {
  const ipv4 = ip.split(':').pop();
  if (ipRegex.test(ipv4)) {
    return ipv4;
  }

  return ip;
};

module.exports = {
  createLoginResponse,
  errorHandler,
  ipv6toIpv4
};
