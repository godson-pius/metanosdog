const cluster = require('cluster');
require('dotenv').config()
const appServer = require('./index')
const cronJob = require('./cron');

const types = {
    SERVER: "SERVER",
    CRON_JOB: "CRON_JOB",
}

if (cluster.isPrimary) {
    cluster.setupPrimary({
        serialization: 'advanced'
    })

    cluster.fork({
        TYPE: types.SERVER,
    })

    cluster.fork({
        TYPE: types.CRON_JOB,
    })
}
else {
    switch (process.env.TYPE) {
        case types.SERVER:
            appServer()
            break

        case types.CRON_JOB:
            cronJob()
            break
    }
}