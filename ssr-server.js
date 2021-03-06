const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/about', (req, res) => {
    console.log('here about')
    const actualPage = '/about'
    server.render(req,res, actualPage)
  })

  server.get('*', (req, res) => {
    console.log('all out')
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:3000`)
  })
}).catch(ex => {
  console.error(ex.stack)
  process.exit(1)
})