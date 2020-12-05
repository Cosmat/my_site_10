// const express = require('express')
const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')
// const cors = require('cors')
const app = require('./app')




// Import and Set Nuxt.js options


async function start () {
  // Init Nuxt.js

  const host = 'localhost'
  const port = 5000

  // Build only in dev mode

  // Give nuxt middleware to express
  

  // const port = 1000
  // Listen the server
  console.log("Server trying starting")
  app.listen(port, '0.0.0.0', () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
 
}
start()
