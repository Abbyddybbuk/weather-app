const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const forecastUrl = `http://api.weatherstack.com/current?access_key=39b7484969b5faa43a71c1af2e0e551d&%20query=${latitude},${longitude}`
    
    console.log(forecastUrl)

    request({ url: forecastUrl, json: true }, (error, response) => {
       if (error) {
          callback('API could not be reached!', undefined)
       } else if (!response.success === undefined) {
          callback(`No response found for location ${latitude},${longitude}`, undefined)
       } else {
          callback(undefined, {
             forecast: response.body.current.temperature
          })
       }
    })
 }

 module.exports = forecast