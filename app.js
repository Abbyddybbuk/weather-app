const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=39b7484969b5faa43a71c1af2e0e551d&%20query=Gwalior'

// request({ url: url, json: true }, (error, response) => {
//    // const data = JSON.parse(response.body)
//    // console.log(data.current)
//    if (error) {
//       console.log('Unable to connect the weather service')
//    } else if (response.body.error) {
//       console.log('Unable to find location')
//    } else {
//       console.log(`Current temperature in ${response.body.location.name} is ${response.body.current.temperature} deg celsius. There is ${response.body.current.precip}% chance of rain. 
//       It feels like ${response.body.current.feelslike}`)
//    }
// })

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Gwalior.json?access_token=pk.eyJ1IjoiYWJieWRkeWJidWsiLCJhIjoiY2toMjg2bDZyMDYyYjJ4bGlvOGU2ODVwMSJ9.gbSZP9gFl9a3hEX1vAxQBQ'
// request({url: geocodeUrl, json: true}, (error, response) => {

//    if (error) {
//       console.log('Unable to connect the weather service')
//    } else if (response.body.features.length===0) {
//       console.log('No location found')
//    } else {
//       console.log(`Latitude of ${response.body.features[0].place_name} is ${response.body.features[0].center[1]}`)
//       console.log(`Longitude of ${response.body.features[0].place_name} is ${response.body.features[0].center[0]}`)
//    }
// })
geocode('Gwalior', (error, response) => {
   if (error) {
      console.log(`ERROR: ${error}`)
   } else {
      console.log(response)
   }
})