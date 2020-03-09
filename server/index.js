// Express server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const port = 3000;
  const app = express();
  const bodyParser = require('body-parser')
  app.use(bodyParser.json())
  const router = require('./router.js');
  const controller = require('./controller.js')
  app.use(router)

  app.use(express.static(path.join(__dirname + '/../client/dist')));



  // app.get('/products', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })

  // app.post('/name', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })

  // app.put('/name', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })

  // app.delete('/name', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })

  app.listen(port, () => console.log('Connected to port: 3000'))