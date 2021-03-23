const questions = [
  {
    title: "How many heading elements are there in HTML?",
    choices: ["3 headings", "4 headings", "5 headings", "6 headings"],
    correctAnswer: "6 headings",
  },
  {
    title: "Why is no one talking today?",
    choices: ["Bad Throat", "Bored", "Just for fun", "Concentrating"],
    correctAnswer: "Bored",
  },
];

const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");

let index = 0;

const createChoices = (choices) => {
  const parentDiv = document.createElement("div");

  const createChoiceAndAppend = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    div.appendChild(button);

    parentDiv.appendChild(div);
  };

  choices.forEach(createChoiceAndAppend);

  return parentDiv;
};

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      quizContainer.removeChild(document.getElementById("question"));
      renderQuestion();
    } else {
      alert("BOO");
    }
  }
};

const createQuestion = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);

  divContainer.addEventListener("click", verifyChoice);

  return divContainer;
};

const renderQuestion = () => {
  if (index < questions.length) {
    // create question container
    const questionContainer = createQuestion(questions[index]);

    // append question container to the DOM
    quizContainer.appendChild(questionContainer);
  } else {
    alert("DONE");
  }
};

const startQuiz = () => {
  // remove the start button container
  const startContainer = document.getElementById("start-container");
  quizContainer.removeChild(startContainer);

  renderQuestion();
};

startButton.addEventListener("click", startQuiz);
