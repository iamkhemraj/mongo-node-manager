const express = require('express');

const app = express();
app.use(express.json());

const http = require('http')
const port = 3000

// Create a server object:
const server = http.createServer(function (req, res) {
  res.write('Server')
  res.end()
})

// Set up our server 
server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  }
  else {
    console.log('Server is listening on port ' + port);
  }
})



app.get('/status', (request, response) => {
  const status = {
    'Status': 'Running'
  };

  response.send(status);
});