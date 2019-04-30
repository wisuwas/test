module.exports = async (path) => {
  const db = require('level')(path);
  await db.close();
  console.log(`> level db is created at '${path}'.`);
};
