const asyncHandler = require('express-async-handler');


// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get goals" })
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    }

    res.status(201).json({ message: "goal created" });
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    console.log(req.params.id);

    res.status(200).json({ message: "goal updated" });
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// access Private
const deleteGoal = asyncHandler(async (req, res) => {
    console.log(req.params.id);

    res.status(200).json({ message: "goal deleted" });
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}