const Queue = require("bull");
const cluster = require("cluster");
const numWorkers = 1;
const jobs = require("./../jobs/playwright-extra");
const runJob = async () => {
  console.log("runJob");
  // const queue = new Queue("listings");
  // queue.process(function (job, jobDone) {
  //   console.log("Job done by worker", cluster.worker.id, job.id);
  //   jobDone();
  // });
  const options = {
    headless: false,
    url: "https://www.etsy.com/your/shops/2TADArt/tools/listings?ref=seller-platform-mcnav",
  };
  const ok = new jobs.PlaywrightExtra(options);
  await ok.setup();
  await ok.etsyLogin("nvnguyen2504@gmail.com", "Mothaiba@123");
};
module.exports = { runJob };
