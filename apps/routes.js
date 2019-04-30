const routes = require('next-routes')();
const pages = require('./pages');

module.exports = routes;

// Register your page component and path in ~/pages.js instead
Object.keys(pages).forEach(key => {
  routes.add(key, pages[key]);
});
