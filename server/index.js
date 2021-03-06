const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const cors = require('cors')
const app = require('./app')


// app.use(cors())


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // const { host, port } = nuxt.options.server
  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  
  // app.use(cors())
  app.use(nuxt.render)
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
