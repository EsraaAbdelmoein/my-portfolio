const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.25;
    music.play();
    toggleBtn.textContent = "Pause Music ⏸️";
  } else {
    music.pause();
    toggleBtn.textContent = "Play Music 🎵";
  }
  isPlaying = !isPlaying;
});

const form = document.getElementById("mealForm");
const resultSection = document.getElementById("result");

const summary = document.getElementById("summary");
const breakfastEl = document.getElementById("breakfast");
const lunchEl = document.getElementById("lunch");
const dinnerEl = document.getElementById("dinner");
const snackEl = document.getElementById("snack");

function getTargetCalories(goal) {
  if (goal === "lose") return 1600;
  if (goal === "maintain") return 2000;
  return 1800;
}

function pickMeals(goal) {
  if (goal === "lose") {
    return {
      breakfast: "Greek yogurt with berries and nuts",
      lunch: "Grilled chicken salad",
      dinner: "Baked fish with vegetables",
      snack: "Apple or almonds"
    };
  }

  if (goal === "maintain") {
    return {
      breakfast: "Oatmeal with banana",
      lunch: "Rice bowl with chicken and vegetables",
      dinner: "Turkey with roasted potatoes",
      snack: "Protein smoothie"
    };
  }

  return {
    breakfast: "Eggs with whole wheat toast",
    lunch: "Lentil soup with salad",
    dinner: "Stir fried vegetables with chicken",
    snack: "Carrots with hummus"
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const goal = document.getElementById("goal").value;

  const calories = getTargetCalories(goal);
  const meals = pickMeals(goal);

  summary.textContent = `${name}, here is your simple daily meal plan. Estimated calories: ${calories} kcal`;

  breakfastEl.textContent = meals.breakfast;
  lunchEl.textContent = meals.lunch;
  dinnerEl.textContent = meals.dinner;
  snackEl.textContent = meals.snack;

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth" });
});
