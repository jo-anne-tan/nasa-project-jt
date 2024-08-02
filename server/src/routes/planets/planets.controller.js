const { planets } = require("../../models/planets.model");

const getPlanets = (req, res) => {
  return res.status(200).json(planets);
};

module.exports = {
  getPlanets,
};
