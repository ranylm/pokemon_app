const pokemon = require('./models/pokemon')
const express = require('express')
const jsxengine=require('jsx-view-engine').createEngine()
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine',jsxengine)
app.set('view','./views')


app.get('/pokemon', (req, res) => {
  res.send('Index')
})

app.get('/', (req, res) => res.send('Welcome to the Pokemon App!'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))