const mongoose = require('mongoose')
const schema = require('./schema')
require('dotenv').config()
const db = mongoose.connection

const model = (() => {
  db.on('error', console.error())
  db.on('open', () => {
    console.log('Connection mongodb!')
  })

  const url = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@cluster0.ikm39.mongodb.net/test?retryWrites=true&w=majority`

  mongoose.connect(url, { dbName: 'blind', useNewUrlParser: true })

  // 스키마 연결

  const model = {}
  for (let key in schema) {
    model[key] = mongoose.model(key, schema[key])
  }
})() //즉시 실행

module.exports = model
