
// @desc GET goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "get goals" })
}

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(301).json({ message: "goal created" });
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: "goal updated" });
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// access Private
const deleteGoal = (req, res) => {

    res.status(200).json({ message: "goal deleted" });
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}