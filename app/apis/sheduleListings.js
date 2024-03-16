const { runJob } = require("./processor");
const getListings = async (app) => {
  app.get(`/api/schedule-listings`, async (req, res, next) => {
    res.send({
      printers: await runJob(),
    });
    next();
  });
};
const sheduleListings = (app) => {
  getListings(app);
};
module.exports = { sheduleListings };
