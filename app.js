const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=39b7484969b5faa43a71c1af2e0e551d&%20query=Gwalior'

request({url: url}, (error, response)=> {
   const data = JSON.parse(response.body)
   console.log(data.current)
})