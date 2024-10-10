const express = require('express');
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controller/goalController');

const router = express.Router();
const { protect } = require('../middleware/authMiddleware');


router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);


module.exports = router;