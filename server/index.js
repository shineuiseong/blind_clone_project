require('dotenv').config()
const AWS = require('aws-sdk')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const { article, board, comment, company, reply, user, search } = require('./routes')
const app = express()
const formidable = require('express-formidable')
const PORT = 3000
const SECRET = process.env.JWTSECRET

AWS.config.update({
  accessKeyId: 'AKIAX36CSY74TRQRK4EG',
  secretAccessKey: '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',
  region: 'ap-northeast-2',
})

const s3 = new AWS.S3()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// JWT 시크릿 설정
app.set('jwt-secret', SECRET)

// 기능별 라우터 추가
app.use(article)
app.use(board)
app.use(comment)
app.use(company)
app.use(reply)
app.use(user)
app.use(search)

app.use(formidable())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.send({ error: true, data: null, msg: '파일이 첨부되지 않음' })
  }
  const raw = req.files.file
  const buffer = fs.readFileSync(raw.path)
  const fileName = new Date().getTime() + raw.name
  const params = {
    Body: buffer,
    Bucket: 'blind-clone-coding-euiseong',
    ACL: 'public-read',
    Key: fileName,
  }
  s3.putObject(params, (err, data) => {
    console.log(err)
    if (err) return res.send({ error: true, data: null, msg: 'S3 에러' })
    console.log(data)
    res.send({ error: false, key: fileName, msg: '성공' })
  })
})

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

app.listen(PORT, 'localhost', () => {
  console.log(`server listening ${PORT}`)
})
