const { Pizza } = require('../models');

/*
================================================
PIZZA CONTROLLERS/ROUTES | /api/pizzas
================================================
*/

const pizzaController = {
  // GET ALL PIZZAS
  getAllPizza(req, res) {
    Pizza.find({})
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

<<<<<<< HEAD
  // get one pizza by id
=======
  // GET PIZZA BY ID
>>>>>>> ba80be477c2179acfcfaa8d5fd0d08c712b99466
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

<<<<<<< HEAD
  // createPizza
=======
  // CREATE NEW PIZZA
>>>>>>> ba80be477c2179acfcfaa8d5fd0d08c712b99466
  createPizza({ body }, res) {
    Pizza.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  },

  // UPDATE PIZZA BY ID
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.json(err));
  },

  // DELETE PIZZA
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  }
};

module.exports = pizzaController;
