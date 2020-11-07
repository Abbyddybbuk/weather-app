const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const forecastUrl = `http://api.weatherstack.com/current?access_key=39b7484969b5faa43a71c1af2e0e551d&%20query=${latitude},${longitude}`
    
    console.log(forecastUrl)

    request({ url: forecastUrl, json: true }, (error, response) => {
       if (error) {
          callback('API could not be reached!', undefined)
       } else if (response.body.error) {
          callback(`No response found for location ${latitude},${longitude}`, undefined)
       } else {
          callback(undefined, {
            forecast: `Current temperature in ${response.body.location.name} is ${response.body.current.temperature} deg celsius. There is ${response.body.current.precip}% chance of rain. 
                       It feels like ${response.body.current.feelslike}`
          })
       }
    })
 }

 module.exports = forecast