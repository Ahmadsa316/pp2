// The data model for a car is as follows
/*
{
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
}
*/

const feedbackArray = [];
let nextId = 1;

const addOne = (sender, message, rating) => {
  if (!sender || sender.trim() === "") return null;
  if (!message || message.trim() === "") return null;
  if (typeof rating !== "number" || rating < 1 || rating > 5) return null;
  const newFeedback = {
    id: nextId++,
    sender: sender.trim(),
    message: message.trim(),
    rating,
  };
  feedbackArray.push(newFeedback);
  return newFeedback;
};
// function to get all feedback items
const getAll = () => {
  return feedbackArray;
};

// function to find a feedback item by its id
const findById = (id) => {
  const numericId = Number(id);
  const feedback = feedbackArray.find((fb) => fb.id === numericId);
  return feedback ?? null;
};

// function to update a feedback item by its id
const updateOneById = (id, updatedData) => {
  const feedback = findById(id);
  if (!feedback) return null;
  ["sender", "message", "rating"].forEach((prop) => {
    if (updatedData[prop] !== undefined) {
      feedback[prop] = updatedData[prop];
    }
  });
  return feedback;
};
// function to delete a feedback item by its id
const deleteOneById = (id) => {
  const feedback = findById(id);
  if (!feedback) return null; // not found
  feedbackArray.splice(feedbackArray.indexOf(feedback), 1);
  return feedback;
};

// Test the functions
module.exports = {
  addOne,
  getAll,
  findById,
  updateOneById,
  deleteOneById,
};

// Test the functions
if (require.main === module) {
  console.log("Adding feedback:");
  const fb1 = addOne("Alice", "Great course!", 5);
  const fb2 = addOne("Bob", "Very informative.", 4);
  console.log(getAll());
  console.log("Finding feedback by ID 1:", findById(1));
  console.log(
    "Updating feedback ID 2:",
    updateOneById(2, { message: "Extremely informative.", rating: 5 })
  );
  console.log("Deleting feedback ID 1:", deleteOneById(1));
  console.log("Final feedback list:", getAll());
}
