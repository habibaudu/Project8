import models from '../models';


const Recipes = models.Recipes;

export default {
  createRecipes(req, res) {
    return Recipes
      .create({
        name: req.body.name,
        Ingredient: req.body.Ingredient,
        Description: req.body.Description,

      })
      .then(recipes => res.status(201).send(recipes)) // working
      .catch(error => res.status(400).send(error));
  },


};
