// set up
const express = require('express')
const app = express()
const port = 3000

// basic routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// listen for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})