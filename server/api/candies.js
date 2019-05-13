const Candies = require('../db/models/Candy');
const router = require('express').Router();


// API ROUTES TO DB REQUIRE SEQUELIZE QUERIES:
router.use('/', async (req, res, next) => {
  try {
    const allCandies = await Candies.findAll();
    res.json(allCandies);
  } catch (err) {
    next(err);
  }
});

// DO NOT use {router} it will deconstruct and will require deconstructing on the import side. Below is the equivalent of 'export default'
module.exports = router;
