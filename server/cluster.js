const cluster = require('cluster')
const server = require('./')
const setupCronJob = require('./cron')

const SERVICE_TYPE = {
  SERVER: "SERVER",
  CRON_JOB: "CRON_JOB",
}

if (cluster.isPrimary) {

	cluster.setupPrimary({
		serialization: 'advanced',
	});

  // CREATE CLUSTER FOR SERVER
  cluster.fork({
    SERVICE_TYPE: SERVICE_TYPE.SERVER,
  });

  // CREATE CLUSTER FOR CRON_JOB
  cluster.fork({
    SERVICE_TYPE: SERVICE_TYPE.CRON_JOB,
  });

} else {

  switch(process.env.SERVICE_TYPE) {
    case SERVICE_TYPE.SERVER:
      server()
      break;

    case SERVICE_TYPE.CRON_JOB:
      setupCronJob();
      break;
  }
}
