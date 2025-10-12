import { useState } from "react";
import Button from "./Button";

function Quiz({ quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [count, setCount] = useState(0);

  function handleSelectedAnswer(answer) {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.answer) {
      setCount((e) => e + 1);
    }
  }

  function handleNext() {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Quiz completed");
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setCount(0);
    }
  }

  const currentQuestion = quiz[currentIndex];

  return (
    <div>
      <h1 className="border-0 my-10 font-bold rounded-3xl mx-36 py-4 px-4 bg-red-800 text-white">
        {currentQuestion.question}
      </h1>
      <ul>
        {currentQuestion.options.map((perQuestion, index) => (
          <li
            className={`border-0 font-bold rounded-3xl mx-40 mb-4 px-4 py-2 text-white ${
              selectedAnswer === perQuestion
                ? perQuestion === currentQuestion.answer
                  ? "bg-green-600" // selected & correct
                  : "bg-red-600" // selected & wrong
                : "bg-indigo-600" // not selected
            }`}
            key={index}
            onClick={() => handleSelectedAnswer(perQuestion)}
          >
            {perQuestion}
          </li>
        ))}
      </ul>
      <Button onClick={handleNext}>Next</Button>
      <p>Total Correct Answer Given: {count}</p>
    </div>
  );
}

export default Quiz;
