const express = require('express');
const router = express.Router();

let recipes = [
    { id: 1, title: "Pasta", ingredients: "Noodles, Tomato Sauce", steps: "Boil pasta, Add sauce" },
    { id: 2, title: "Pizza", ingredients: "Dough, Cheese, Tomato Sauce", steps: "Make dough, Add toppings, Bake" },
];

// Get all recipes
router.get('/', (req, res) => {
    res.json(recipes);
});

// Add a new recipe
router.post('/', (req, res) => {
    const { title, ingredients, steps } = req.body;
    const newRecipe = { id: recipes.length + 1, title, ingredients, steps };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

module.exports = router;
