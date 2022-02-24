const express = require('express')
const cors = require('cors')
const { article } = require('./routes')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 기능별 라우터 추가
app.use(article)

app.get('/', (req, res) => {
  res.send('Server is running')
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
