const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch warther for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAkh-ielsXpU2Q2UvWvmBXyOv_7h_YZYoU`;
        
axios.get(geocodeURL).then((response) => {
    console.log(response.data)
}).catch((e) => {
    console.log(e)
})