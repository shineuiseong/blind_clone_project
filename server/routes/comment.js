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
    console.log(updateComment)
    res.send(updateComment)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 댓글 삭제
router.delete('/comment/delete', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedComment = await Comment.deleteOne({ _id: id, author })

    console.log(deletedComment)
    res.send(deletedComment)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
