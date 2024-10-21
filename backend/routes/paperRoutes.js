//Exports an Express.js router and set routes to Papers
const express = require('express')
const router = express.Router()
const {
  getPapers,
  setPaper,
  updatePaper,
  getPaperById,
} = require('../controllers/paperController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getPapers).post(protect, setPaper)
router.route('/:id').put(protect, updatePaper).get(getPaperById)

module.exports = router