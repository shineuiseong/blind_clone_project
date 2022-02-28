const express = require('express')
const router = express.Router()
const { Article, Comment } = require('../mongoose/model')
const jwt = require('jsonwebtoken')

// 개별 게시글 가져오는 라우트
router.get('/article/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const article = await Article.findById(id)
    const comment = await Comment.find({ article: id })
    res.send({ article, comment })
  } catch (error) {
    console.log(error)
    next(error)
  }
})
// 게시글 추가
router.post('/article/create', async (req, res, next) => {
  try {
    const { title, content, board } = req.body
    const { authorization } = req.headers

    if (!authorization) {
      return res.send({
        error: true,
        msg: '토큰이 존재하지 않음',
      })
    }
    const token = authorization.split(' ')[1]
    const secret = req.app.get('jwt-secret')
    jwt.verify(token, secret, async (err, data) => {
      if (err) {
        res.send(err)
      }
      const payload = {
        author: data.id,
        title,
        content,
        board,
      }
      const newArticle = await Article(payload).save()
      res.send(newArticle)
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 게시글 수정
router.patch('/article/update', async (req, res, next) => {
  try {
    const { id, author, content } = req.body

    const updateArticle = await Article.findOneAndUpdate(
      {
        _id: id,
        author,
      },
      {
        content,
      },
      {
        new: true,
      }
    )
    res.send(updateArticle)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 게시글 완전 삭제
router.delete('/article/delete/hard', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedArticle = await Article.deleteOne({ _id: id, author })

    res.send(deletedArticle)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 게시글 소프트 삭제
router.delete('/article/delete/soft', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedArticle = await Article.findOneAndUpdate(
      {
        _id: id,
        author,
      },
      {
        deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30일 후의 시간이 저장
      }
    )

    res.send(deletedArticle)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
