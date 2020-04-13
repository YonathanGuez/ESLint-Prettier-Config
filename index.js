const app = require('express')()
const https = require('https')
const fs = require('fs')

// GET home route
app.get('/', (req, res) => {
  res.header('Content-type', 'text/html')
  return res.end('<h1>HTTPS WORKS!</h1>')
})

// we will pass our 'app' to 'https' server
https
  .createServer(
    {
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem'),
      passphrase: 'tests',
    },
    app,
  )
  .listen(3000)
