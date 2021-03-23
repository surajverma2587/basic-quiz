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

const startButton = $("#start-button");
const quizContainer = $("#quiz-container");

let index = 0;

const createChoices = (choices) => {
  const parentDiv = $("<div>");

  const createChoiceAndAppend = (choice) => {
    const div = $("<div>");
    const button = $("<button>").attr("data-answer", choice).text(choice);

    div.append(button);

    parentDiv.append(div);
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
      $("#question").remove();
      renderQuestion();
    } else {
      alert("BOO");
    }
  }
};

const createQuestion = (question) => {
  const divContainer = $("<div>")
    .attr("id", "question")
    .attr("data-answer", question.correctAnswer);

  const h2 = $("<h2>").text(question.title);

  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);

  divContainer.on("click", verifyChoice);

  return divContainer;
};

const renderQuestion = () => {
  if (index < questions.length) {
    // create question container
    const questionContainer = createQuestion(questions[index]);

    // append question container to the DOM
    quizContainer.append(questionContainer);
  } else {
    alert("DONE");
  }
};

const startQuiz = () => {
  // remove the start button container
  const startContainer = $("#start-container");
  startContainer.remove();
  // quizContainer.removeChild(startContainer);

  renderQuestion();
};

startButton.on("click", startQuiz);
