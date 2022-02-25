const express = require('express')
const router = express.Router()
const { Reply } = require('../mongoose/model')

// 대댓글 생성하기
router.post('/reply/create', async (req, res, next) => {
  try {
    const { author, comment, content } = req.body

    const newReply = await Reply({ author, comment, content }).save()

    res.send(newReply._id ? true : false)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 대댓글 수정
router.patch('/reply/update', async (req, res, next) => {
  try {
    const { id, author, content } = req.body

    const updateReply = await Reply.findOneAndUpdate(
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
    console.log(updateReply)
    res.send(updateReply)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 대댓글 완전 삭제(Hard Delete)   DB에도 존재하지 않게 만드는것
router.delete('/reply/delete/hard', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedReply = await Reply.deleteOne({ _id: id, author })

    console.log(deletedReply)
    res.send(deletedReply)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 대댓글 소프트 삭제(soft Delete) 일반 사용자는 보지 못하는 상태, 일정 기간이 지나면 삭제될 상태
router.delete('/reply/delete/soft', async (req, res, next) => {
  try {
    const { id, author } = req.body

    const deletedReply = await Reply.findOneAndUpdate(
      {
        _id: id,
        author,
      },
      {
        deleteTime: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30일 후의 시간이 저장
      }
    )

    console.log(deletedReply)
    res.send(deletedReply)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
