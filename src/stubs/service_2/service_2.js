const mbHelper = require('../../mountebank-helper');
const settings = require('../../settings');
const stubs  = require('./stubs.json');
function addService() {
   
    const imposter = {
        name: "service_2_Mock",
        port: settings.service_port_2,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

module.exports = { addService };