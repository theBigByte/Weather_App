const request = require('request');

request({
    url : 'http://maps.googleapis.com/maps/api/geocode/json?address=los%20angeles',
    json: true
}, (error, response, body) => {

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitute: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
});