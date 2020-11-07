const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
   console.log('Error: location not provided')
} else {
   geocode(process.argv[2], (error, data) => {
      if (error) {
         return console.log(`ERROR: ${error}`)
      }

      forecast(data.latitude, data.longitude, (error, forecastData) => {
         if (error) {
            return console.log(`ERROR: ${error}`)
         }
         console.log(data.location)
         console.log(forecastData)

      })
   })
}
