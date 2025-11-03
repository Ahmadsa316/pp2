const Feedback = require("./feedbackLib.js");

// Get all feedback items
const getAllFeedback = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

// Get feedback by ID
const getFeedbackById = (req, res) => {
  const feedback = Feedback.findById(req.params.feedbackId);
  console.log(req.params.feedbackId);
  console.log(feedback);
  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ error: "Feedback not found" });
  }
};

// Add new feedback
const addFeedback = (req, res) => {
  const { sender, message, rating } = req.body;
  const newFeedback = Feedback.addOne(sender, message, rating);
  if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(400).json({ error: "Invalid feedback data" });
  }
};

// Update feedback by ID
const updateFeedback = (req, res) => {
  const updatedFeedback = Feedback.updateOneById(
    req.params.feedbackId,
    req.body
  );
  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    res.status(404).json({ error: "Feedback not found" });
  }
};

// Delete feedback by ID
const deleteFeedback = (req, res) => {
  const deletedFeedback = Feedback.deleteOneById(req.params.feedbackId);
  if (deletedFeedback) {
    res.json(deletedFeedback);
  } else {
    res.status(404).json({ error: "Feedback not found" });
  }
};

module.exports = {
  getAllFeedback,
  getFeedbackById,
  addFeedback,
  updateFeedback,
  deleteFeedback,
};
