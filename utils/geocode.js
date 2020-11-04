const request = require('request')

const geocode = (place, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=pk.eyJ1IjoiYWJieWRkeWJidWsiLCJhIjoiY2toMjg2bDZyMDYyYjJ4bGlvOGU2ODVwMSJ9.gbSZP9gFl9a3hEX1vAxQBQ`
 
    request({ url: geocodeUrl, json: true }, (error, response) => {
       if (error) {
          callback('API could not be reached!', undefined)
       } else if (response.body.features.length === 0) {
          callback(`No response found for location ${place}`, undefined)
       } else {
          callback(undefined, {
             latitude: response.body.features[0].center[1],
             longitude: response.body.features[0].center[0],
             location: response.body.features[0].place_name
          })
       }
    })
 }

 module.exports = geocode
 