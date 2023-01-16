const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getRecipes,
  getSingleRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controllers/recipecontrollers");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

//Get aLL recipes
router.get("/", getRecipes);

//GET a single recipe
router.get("/:id", getSingleRecipe);

//POST/CREATE a recipe
router.post("/", createRecipe);

//DELETE a recipe
router.delete("/:id", deleteRecipe);

//PATCH/UPDATE a recipe
router.patch("/:id", updateRecipe);

module.exports = router;
