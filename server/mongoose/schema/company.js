const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Company = new Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, required: true },
  reviewscore: { type: String, default: 3 },
  imgAddress: { type: String, default: null },
  realtimeScore: { type: Number, default: 0 }, // 가변적이라 따로 뺴두는게 좋지만 시간상 진행 리팩토링때 다시진행할예정
})

module.exports = Company
