const request = require("request");
var getWeather = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/8b8c661d1ae5c86eebb64f841d617ae7/${latitude},${longitude}`,
            json: true
        }, (error, response, body) => {
            if(!error && response.statusCode === 200){
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            } else {
                reject("Unable to fetch weather.")  
            }
        })
    })    
}

module.exports = {
    getWeather
}