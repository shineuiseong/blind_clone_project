const express = require('express')
const router = express.Router()
const { Article, Comment } = require('../mongoose/model')

// 댓글 생성하기
router.post('/comment/create', async (req, res, next) => {
  try {
    const { author, article, content } = req.body

    const newComment = await Comment({ author, article, content }).save()

    res.send(newComment._id ? true : false)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 댓글 수정
router.patch('/comment/update', async (req, res, next) => {
  try {
    const { id, author, content } = req.body

    const updateComment = await Comment.findOneAndUpdate(
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
    res.send(updateComment)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 댓글 완전 삭제
router.delete('/comment/delete/hard', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedComment = await Comment.deleteOne({ _id: id, author })

    res.send(deletedComment)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 댓글 소프트 삭제
router.delete('/comment/delete/soft', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedComment = await Comment.findOneAndUpdate(
      {
        _id: id,
        author,
      },
      {
        deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30일 후의 시간이 저장
      }
    )

    res.send(deletedComment)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
