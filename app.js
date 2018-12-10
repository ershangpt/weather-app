const yargs = require('yargs');

const geocode = require("./geocode/geocode");
const weather = require("./weather/promise_weather")
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
    console.log(argv)

    
geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage)
    } else {
        console.log(result)
        /*weather.getWeather(result.latitude, result.longitude, (errorMessage, result1) => {
            if(errorMessage){
                console.log(errorMessage)
            } else {
                console.log(result1);
            }
            });*/
        weather.getWeather(result.latitude, result.longitude).then((result) =>{
            console.log("Success: ",result)
        }).catch((errorMessage)=>{
            console.log("Error: ", errorMessage)
        })
    }
})

// 8b8c661d1ae5c86eebb64f841d617ae7