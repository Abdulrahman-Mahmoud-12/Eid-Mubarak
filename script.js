document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const welcomeScreen = document.getElementById("welcome-screen");
  const puzzleScreen = document.getElementById("puzzle-screen");
  const celebrationScreen = document.getElementById("celebration-screen");
  const screens = [welcomeScreen, puzzleScreen, celebrationScreen];

  const nameInput = document.getElementById("name-input");
  const startButton = document.getElementById("start-button");
  const nameError = document.getElementById("name-error");

  const puzzleQuestion = document.getElementById("puzzle-text");
  const puzzleAnswerInput = document.getElementById("puzzle-answer");
  const submitAnswerButton = document.getElementById("submit-answer");
  const retryMessage = document.getElementById("retry-message");

  const eidGreeting = document.getElementById("eid-greeting");
  const personalWish = document.getElementById("personal-wish");
  const animationContainer = document.getElementById("animation-container");
  const eidMusic = document.getElementById("eid-music");

  let userName = "";
  let currentPuzzle = {};

  const puzzles = [
    {
      question:
        "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost everybody. What am I?",
      answer: "pencil",
    },
    { question: "What has an eye, but cannot see?", answer: "needle" },
    { question: "How many months of the year has 28 days?", answer: "12" },
    {
      question: "What is always in front of you but can’t be seen?",
      answer: "future",
    },
    { question: "What has to be broken before you can use it?", answer: "egg" },
    {
      question:
        "If you have 3 apples and you take away 2, how many do you have?",
      answer: "2",
    },
    { question: "How many days that Eid al-Fitr have?", answer: "4" },
    {
      question:
        "If you were in a race and passed the third runner, what is your position now?",
      answer: "third",
    },
    { question: "What gets wetter the more it dries?", answer: "towel" },
    { question: "What is full of holes but still holds water?", answer: "sponge" },
    { question: "If you drop me, I break, but if you smile at me, I smile back. What am I?", answer: "mirror" },
    { question: "I go up, but I never come down. What am I?", answer: "age" },
    { question: "I fly without wings, I cry without eays. Whever I go, darkness follows me. What am I?", answer: "cloud" },
  ];

  function showScreen(screenToShow) {
    screens.forEach((screen) => {
      screen.classList.toggle("active", screen === screenToShow);
    });
  }

  function generatePuzzle() {
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    currentPuzzle = puzzles[randomIndex];
    puzzleQuestion.textContent = currentPuzzle.question;
    puzzleAnswerInput.value = "";
    retryMessage.classList.add("hidden");
  }

  startButton.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName) {
      nameError.classList.add("hidden");
      generatePuzzle();
      showScreen(puzzleScreen);
    } else {
      nameError.classList.remove("hidden");
    }
  });

  submitAnswerButton.addEventListener("click", () => {
    const userAnswer = puzzleAnswerInput.value.trim().toLowerCase();
    const correctAnswer = currentPuzzle.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      retryMessage.classList.add("hidden");
      showScreen(celebrationScreen);
      eidGreeting.textContent = `Eid Mubarak, ${userName}! 🎉`;
      personalWish.textContent = `${userName}, may this Eid bring you endless happiness! 🌙✨`;
    } else {
      retryMessage.classList.remove("hidden");
      generatePuzzle();
    }
  });

  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      startButton.click();
    }
  });

  puzzleAnswerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitAnswerButton.click();
    }
  });

  showScreen(welcomeScreen);
});
