const mb = require('mountebank');
const settings = require('./settings');
const service_1 = require('./stubs/service_1/service_1');
const service_2 = require('./stubs/service_2/service_2');


const mbServerInstance = mb.create({
        port: settings.port,
        pidfile: '../mb.pid',
        logfile: '../mb.log',
        protofile: '../protofile.json',
        ipWhitelist: ['*'],
        allowInjection:true,
        replay:true,
        loglevel:"debug"
    });

    mbServerInstance.then(function() {
        service_1.addService();
        service_2.addService();

    });