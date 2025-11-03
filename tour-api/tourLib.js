let tours = [];
let currentId = 1;

function addOne(name, info, image, price) {
  const tour = { id: currentId++, name, info, image, price };
  tours.push(tour);
  return tour;
}

function getAll() {
  return tours;
}

function findById(id) {
  return tours.find(t => t.id === id);
}

function updateById(id, newData) {
  const tour = findById(id);
  if (!tour) return null;
  tour.name = newData.name || tour.name;
  tour.info = newData.info || tour.info;
  tour.image = newData.image || tour.image;
  tour.price = newData.price || tour.price;
  return tour;
}

function deleteById(id) {
  const index = tours.findIndex(t => t.id === id);
  if (index === -1) return false;
  tours.splice(index, 1);
  return true;
}

// For testing independently
if (require.main === module) {
  let result = addOne("7 Days Tour", "Join us for the Best of Helsinki!", "https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
  console.log(result);
  console.log("getAll:", getAll());
  console.log("findById:", findById(1));
}

module.exports = { addOne, getAll, findById, updateById, deleteById };
