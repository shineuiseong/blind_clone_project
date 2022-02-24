const mongoose = require('mongoose')
const crypto = require('crypto')
const Schema = mongoose.Schema

const User = new Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  salt: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  nickname: { type: String, required: true, unique: true },
})

// password 가상 선택자
User.virtual('password').set((password) => {
  this._password = password
  this.salt = this.makeSalt()
  this.hashedPassword = this.encryptPassword(password)
})

// salt 생성 함수
User.method('makeSalt', () => {
  return Math.round(new Date().valueOf() * Math.random() + 'euiseong')
})

// 해시된 비밀번호 생성 함수

User.method('encryptPassword', (plainPassword) => {
  return crypto.createHmac('sh256', this.salt).update(plainPassword).digest('hex')
})

module.exports = User
