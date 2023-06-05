
// quiz.js
// Define your quiz data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter"
    },
    // Add more questions...
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  
  // Load the quiz data and display the current question
  function loadQuiz() {
    const questionElement = document.getElementById("question");
    const optionElements = document.getElementById("options");
    const submitButton = document.getElementById("submit-btn");
  
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.textContent = currentQuizData.question;
  
    optionElements.innerHTML = "";
    currentQuizData.options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      optionElements.appendChild(li);
    });
  
    submitButton.addEventListener("click", checkAnswer);
  }
  
  // Check the selected answer and update the score
  function checkAnswer() {
    const options = document.querySelectorAll("#options li");
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const selectedOption = this.textContent;
        if (selectedOption === quizData[currentQuestion].correctAnswer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          loadQuiz();
        } else {
          showResults();
        }
      });
    });
  }
  
  // Display the final score
  function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");
  
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
  
    scoreElement.textContent = `${score} / ${quizData.length}`;
  }
  
  // Load the quiz on page load
  window.onload = loadQuiz;
  