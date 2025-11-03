const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  res.json(Tour.getAll());
};

const createTour = (req, res) => {
  const { name, info, image, price } = req.body;
  if (!name || !info || !image || !price) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const tour = Tour.addOne(name, info, image, price);
  res.status(201).json(tour);
};

const getTourById = (req, res) => {
  const tour = Tour.findById(Number(req.params.tourId));
  if (!tour) return res.status(404).json({ error: "Tour not found" });
  res.json(tour);
};

const updateTour = (req, res) => {
  const updated = Tour.updateById(Number(req.params.tourId), req.body);
  if (!updated) return res.status(404).json({ error: "Tour not found" });
  res.json(updated);
};

const deleteTour = (req, res) => {
  const deleted = Tour.deleteById(Number(req.params.tourId));
  if (!deleted) return res.status(404).json({ error: "Tour not found" });
  res.status(204).send();
};

module.exports = { getAllTours, createTour, getTourById, updateTour, deleteTour };
