const express = require('express')
const router = express.Router()
const { Article, Comment } = require('../mongoose/model')
const { User } = require('../mongoose/schema')

// 로그인 요청
router.post('/user', async (req, res, next) => {
  try {
    const { email, password } = req.body

    // 로그인 유저 정보가 일치 하는지
    const loginUser = await User.find({ email: email })
    if (!loginUser._id) {
      return res.send({
        error: true,
        msg: '존재하지 않은 이메일',
      })
    }

    // 비밀번호가 맞는지
    const correctPassword = await loginUser.authenticate(password)
    if (!correctPassword) {
      return res.send({
        error: true,
        msg: '비밀번호 불일치',
      })
    }

    res.send({ email: loginUser.email, nickname: loginUser.nickname })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
