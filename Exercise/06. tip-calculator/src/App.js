import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="app">
        <TipCalculator />
      </div>
    </>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <div>
        <ul className="config">
          <li>
            <BillInput bill={bill} onSetBill={setBill} />
          </li>
          <li>
            <SelectPercentage
              percentage={percentage1}
              onSelect={setPercentage1}
            >
              How did you like the service?
            </SelectPercentage>
          </li>
          <li>
            <SelectPercentage
              percentage={percentage2}
              onSelect={setPercentage2}
            >
              How did your friend like the service?
            </SelectPercentage>
          </li>
          <li>
            <Output bill={bill} tip={tip} />
          </li>
          <li>
            <Reset
              setBill={setBill}
              setPercentage1={setPercentage1}
              setPercentage2={setPercentage2}
              onReset={handleReset}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <div>
        <label>How much was the bill? </label>
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) {
              onSetBill(Number(val));
            }
          }}
        />
      </div>
    </>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <>
      <div>
        <label>{children}</label>
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="15">Absolutely amazing! (15%)</option>
        </select>
      </div>
    </>
  );
}

function Output({ bill, tip }) {
  return (
    <>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
    </>
  );
}

function Reset({ onReset }) {
  return (
    <>
      <Button bgColor="black" color="white" onReset={onReset}>
        Reset
      </Button>
    </>
  );
}

function Button({ bgColor, color, children, onReset }) {
  return (
    <>
      <button
        onClick={onReset}
        style={{
          backgroundColor: bgColor,
          color: color,
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    </>
  );
}
