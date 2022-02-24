const mongoose = require('mongoose')
const schema = require('./schema')
require('dotenv').config()
const db = mongoose.connection

const model = (() => {
  db.on('error', console.error)
  db.on('open', () => {
    console.log('connection mongoDB!')
  })

  // 아틀라스 연결
  const url = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@cluster0.ikm39.mongodb.net/test?retryWrites=true&w=majority`

  mongoose
    .connect(url, { dbName: 'blind', useNewUrlParser: true })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch((e) => console.error(e))

  // 스키마 연결
  const model = {}
  for (let k in schema) {
    model[k] = mongoose.model(k, schema[k])
  }
  return model
})()

module.exports = model
