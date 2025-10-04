import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("october 04 2025");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="div-conf">
        <button onClick={() => setStep((currCount) => currCount - 1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((currCount) => currCount + 1)}>+</button>

        <button onClick={() => setCount((currCount) => currCount - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((currCount) => currCount + step)}>
          +
        </button>

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
