//Exports an Express.js router and set routes to Reviews

const express = require('express')
const router = express.Router()
const {
    createReviewDraft,
    createReviewSubmit,
    getReviews,
    getReviewsbyid
} = require('../controllers/reviewController')


router.route('/draft/:id').post(createReviewDraft)
router.route('/submit/:id').post(createReviewSubmit)
router.route('/:id').get( getReviews);
router.route('/view/:id').get(getReviewsbyid);


module.exports = router
