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

    console.log(newCompany)
    res.send(newCompany._id ? true : false)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
