const express = require('express')
const router = express.Router()
const { User } = require('../mongoose/model')
const jwt = require('jsonwebtoken')

// 로그인 요청
router.post('/user/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    // 로그인 유저 정보가 일치 하는지
    const loginUser = await User.findOne({ email: email })
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
    const secret = req.app.get('jwt-secret')
    const token = jwt.sign(
      {
        id: loginUser._id,
        email: loginUser.email,
        nickname: loginUser.nickname,
      },
      secret,
      {
        expiresIn: '7d',
        issuer: 'blind_clone_cooding',
        subject: 'auth',
      }
    )

    res.send({
      email: loginUser.email,
      nickname: loginUser.nickname,
      error: false,
      msg: '로그인성공',
      token: token,
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 사용자 추가
router.post('/user/create', async (req, res, next) => {
  try {
    const { email, password, nickname, company } = req.body

    const newUser = await User({
      email,
      password,
      nickname,
      company,
    }).save()

    console.log(newUser)
    res.send(newUser._id ? true : false)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 사용자 토큰 체크
router.get('/user/token', (req, res) => {
  const { authorization } = req.headers
  if (!authorization) {
    return res.send(false)
  }
  const token = authorization.split(' ')[1]
  const secret = req.app.get('jwt-secret')
  jwt.verify(token, secret, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send({
      email: data.email,
      nickname: data.nickname,
    })
  })
})

// 사용자 정보 변경 (미구현)
router.patch('/user/update', async (req, res, next) => {
  try {
    const { id, email, password, nickname, company } = req.body

    // 로그인 유저 정보가 일치 하는지
    const loginUser = await User.findOne({ email: email })
    console.log(loginUser)
    if (!loginUser._id) {
      return res.send({
        error: true,
        msg: '존재하지 않은 이메일',
      })
    }
    // 비밀번호가 맞는지
    const correctPassword = await loginUser.authenticate(password)
    console.log(correctPassword)
    if (!correctPassword) {
      return res.send({
        error: true,
        msg: '비밀번호 불일치',
      })
    }

    console.log('dddddddddddd')
    const updateUser = await User.findOneAndUpdate(
      {
        _id: id,
      },
      {}
    )

    console.log(updateUser)
    res.send(updateUser._id ? true : false)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 사용자 삭제

// 프로필 이미지 추가

module.exports = router
