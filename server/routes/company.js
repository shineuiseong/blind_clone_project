const express = require('express')
const router = express.Router()
const { Company } = require('../mongoose/model')

// 회사 추가

router.post('/company/create', async (req, res, next) => {
  try {
    const { name } = req.body
    const newCompany = await Company({
      name,
    }).save()

    res.send(newCompany._id ? true : false)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// 회사 인기 목록 불러오기
router.get('/company/list/famous', async (req, res, next) => {
  try {
    const company = await Company.find().limit(10).sort({ realtimeScore: -1 })
    res.send(company)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
