const express = require("express");
const router = express.Router();
const { getAllCars, getCarById } = require("../controllers/carController");

//get all cars
router.get("/", getAllCars);

//get one car
router.get("/:id", getCarById);

module.exports = router;
