const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);//to encode the string

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log('Unable to connect to Google Server');

    } else if(body.status === 'ZERO_RESULTS'){
        
        console.log('Unable to find this address');

    }else if(body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitute: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    }
});