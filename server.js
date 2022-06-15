const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
     'oolong': {
          'type': 'black',
          'origin': 'Yogi',
          'waterTemp': 200,
          'steepTimeSeconds': 180,
          'caffine': true,
          'flavor': 'Vanilla Spice'
     }, 
     'matcha': {
          'type': 'green',
          'origin': 'Yogi',
          'waterTemp': 195,
          'steepTimeSeconds': 150,
          'caffine': false,
          'flavor': 'Bitter'
     }, 
     'white': {
          'type': 'white',
          'origin': 'Yogi',
          'waterTemp': 195,
          'steepTimeSeconds': 180,
          'caffine': false,
          'flavor': 'Delicious'
     },
     'unknown': {
          'type': 'unknown',
          'origin': 'Yogi',
          'waterTemp': 195,
          'steepTimeSeconds': 180,
          'caffine': false,
          'flavor': 'mysterious'
     }
}

app.get('/', (request, response) => {
     response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
     const teaName = request.params.name.toLowerCase()
     if ( tea[teaName] ) {
          response.json(tea[teaName])
     } else {
          response.json(tea['unknown'])
     }
})

app.listen(process.env.PORT || PORT, () => {
     console.log('The server is running on port ${PORT}! Betta Go Catch it~')
})