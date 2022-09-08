import {
  fetchFavMeals,
  getMealsBySearch,
  getRandomMeal,
} from "./classes/MealFetch.js";
import { addMeal } from "./classes/MealUI.js";

export const mealsEl = document.getElementById("meals");
export const favoriteContainer = document.getElementById("fav-meals");
export const mealPopup = document.getElementById("meal-popup");
export const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");
const searchTerm = document.getElementById("search-term");
const searchForm = document.getElementById("searchForm");

await getRandomMeal();
await fetchFavMeals();

searchForm.addEventListener("submit", async (e) => {
  // clean container
  mealsEl.innerHTML = "";
  e.preventDefault();
  const search = searchTerm.value;
  const meals = await getMealsBySearch(search);

  if (meals) {
    meals.forEach((meal) => {
      addMeal(meal);
    });
  }
});

popupCloseBtn.addEventListener("click", () => {
  mealPopup.classList.add("hidden");
});
