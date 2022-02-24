const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.listen(PORT, 'localhost', () => {
  console.log(`server listening ${PORT}`)
})
