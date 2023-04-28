const pokemon = require('./models/pokemon')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/pokemon', (req, res) => {
  res.send(pokemon)
})



app.get('/', (req, res) => res.send('Welcome to the Pokemon App!'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))