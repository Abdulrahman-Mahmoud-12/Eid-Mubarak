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
      question: "حاجة كل ما تاخد منها بتكبر، اية هى ؟",
      answer: "الحففرة",
    },
    { question: "عندى عين لكن مش بشوفو ابقى مين؟", answer: "الإبرة" },
    { question: "كم شهر فى السنة فيه 28 يوم؟", answer: "12" },
    {
      question: "اية الحاجة اللى دايمًا قدامك بس مبتشوفهاش؟",
      answer: "المستقبل",
    },
    { question: "اية الحاجة اللى بتكسرها قبل ما تستخدمها؟", answer: "البيضة" },
    {
      question: "لو فى 3 تفاحات وخدت منهم 2 يتبقى معاك كام؟",
      answer: "2",
    },
    { question: "عيد الفطر فيه كام يوم؟", answer: "4" },
    {
      question: "لو انت فى شباق وعديت المتسابق الثالث يبقى انت الكام؟",
      answer: "الثالث",
    },
    {
      question: "حاجة بتملى اى مكان من غير ما تاخد أى مساحة، اية هى؟",
      answer: "الضوء",
    },
    {
      question: "حاجة مليانة ثقوب بس بتحفظ الماية، تبقى اية؟",
      answer: "إسفنجة",
    },
    {
      question: "لو وقعتنى بتكسر ، ولو ضحكتلى بضحكلك ابقي إية؟",
      answer: "المراية",
    },
    { question: "دايمًا  بزيد وعمرى ما بقل، ابقا اية؟", answer: "العمر" },
    {
      question:
        "بقدر أطير من غير جناحات، وبعيط من غير دموع، ومكان ما بروح الضلمة بتيجى ورايا، ابقا اية؟",
      answer: "السحابة",
    },
    { question: "حاجة تقدر تكسرها من غير ما تلمسها، اية هى؟", answer: "الوعد" },
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
