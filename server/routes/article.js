const express = require('express')
const router = express.Router()
const { Article } = require('../mongoose/model')

// 개별 게시글 가져오는 라우트
router.get('/article/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const article = await Article.findById(id)
    res.send(article)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
