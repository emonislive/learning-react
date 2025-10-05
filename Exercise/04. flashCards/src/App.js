import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1001,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 1002,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 1003,
    question:
      "What is the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1004,
    question: "How to pass data from parent to child component?",
    answer: "Props",
  },
  {
    id: 1005,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled component",
  },
  {
    id: 1006,
    question: "What hook is used to add state to a functional component?",
    answer: "useState",
  },
  {
    id: 1007,
    question: "What hook allows you to perform side effects in a component?",
    answer: "useEffect",
  },
  {
    id: 1008,
    question: "What function is used to create a new React component?",
    answer: "A function that returns JSX",
  },
  {
    id: 1009,
    question: "What is the virtual DOM in React?",
    answer: "A lightweight copy of the real DOM used for efficient updates",
  },
  {
    id: 1010,
    question: "Which company developed React?",
    answer: "Facebook (now Meta)",
  },
  {
    id: 1011,
    question: "What is ReactDOM used for?",
    answer: "Rendering React components to the DOM",
  },
  {
    id: 1012,
    question: "What is the purpose of keys in React lists?",
    answer: "To help React identify elements that have changed",
  },
  {
    id: 1013,
    question: "What is prop drilling?",
    answer: "Passing props through multiple levels of components",
  },
  {
    id: 1014,
    question: "How can you prevent re-renders of a component?",
    answer: "Using React.memo or useMemo",
  },
  {
    id: 1015,
    question:
      "What is the default behavior of React components when their state changes?",
    answer: "They re-render",
  },
  {
    id: 1016,
    question: "What hook provides access to context in React?",
    answer: "useContext",
  },
  {
    id: 1017,
    question: "What is the purpose of the useRef hook?",
    answer:
      "To access or store a mutable reference that persists across renders",
  },
  {
    id: 1018,
    question: "Which hook is used to memoize expensive computations?",
    answer: "useMemo",
  },
  {
    id: 1019,
    question: "Which hook is used to memoize callback functions?",
    answer: "useCallback",
  },
  {
    id: 1020,
    question: "What does JSX stand for?",
    answer: "JavaScript XML",
  },
  {
    id: 1021,
    question: "What function converts JSX into React elements?",
    answer: "React.createElement",
  },
  {
    id: 1022,
    question: "What is a fragment in React?",
    answer: "A wrapper that lets you group elements without adding extra nodes",
  },
  {
    id: 1023,
    question: "What is the purpose of React.StrictMode?",
    answer: "To highlight potential problems in an application",
  },
  {
    id: 1024,
    question: "What is a higher-order component (HOC)?",
    answer: "A function that takes a component and returns a new component",
  },
  {
    id: 1025,
    question: "What is the use of React Router?",
    answer: "To handle navigation between components or pages",
  },
  {
    id: 1026,
    question: "How can you style React components?",
    answer: "Using CSS, inline styles, or CSS-in-JS libraries",
  },
  {
    id: 1027,
    question: "What is the purpose of the useReducer hook?",
    answer: "To manage complex state logic using reducers",
  },
  {
    id: 1028,
    question: "What is the difference between state and props?",
    answer: "Props are read-only, while state is mutable within a component",
  },
  {
    id: 1029,
    question: "Can React components return multiple elements?",
    answer: "Yes, by wrapping them in a fragment or parent element",
  },
  {
    id: 1030,
    question: "What is reconciliation in React?",
    answer: "The process of updating the DOM when the virtual DOM changes",
  },
  {
    id: 1031,
    question: "What is the purpose of the key prop?",
    answer: "To give unique identity to elements in a list",
  },
  {
    id: 1032,
    question:
      "What is the difference between a class component and a function component?",
    answer:
      "Class components use lifecycle methods, while function components use hooks",
  },
  {
    id: 1033,
    question: "What is a controlled component?",
    answer: "An input element whose value is controlled by React state",
  },
  {
    id: 1034,
    question: "What is an uncontrolled component?",
    answer: "An input element that manages its own state internally",
  },
  {
    id: 1035,
    question: "What does lifting state up mean in React?",
    answer: "Moving state to a common ancestor to share between components",
  },
  {
    id: 1036,
    question: "What is the purpose of React.lazy?",
    answer: "To lazy load components for code-splitting",
  },
  {
    id: 1037,
    question: "What is Suspense used for in React?",
    answer: "To show fallback content while components are loading",
  },
  {
    id: 1038,
    question: "What is the default port for running React development server?",
    answer: "3000",
  },
  {
    id: 1039,
    question: "What does 'lifting state up' mean?",
    answer:
      "Sharing state between components by moving it to their common ancestor",
  },
  {
    id: 1040,
    question: "What is React Fiber?",
    answer: "The new reconciliation engine introduced in React 16",
  },
  {
    id: 1041,
    question: "What is React Portal used for?",
    answer: "To render children into a DOM node outside the parent hierarchy",
  },
  {
    id: 1042,
    question: "What method is used to render a React app to the DOM?",
    answer: "ReactDOM.createRoot or ReactDOM.render",
  },
  {
    id: 1043,
    question: "What is the difference between useLayoutEffect and useEffect?",
    answer:
      "useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously",
  },
  {
    id: 1044,
    question: "What is the purpose of default props?",
    answer: "To assign default values to props if not provided",
  },
  {
    id: 1045,
    question: "What is the purpose of PropTypes?",
    answer: "To type-check props at runtime",
  },
  {
    id: 1046,
    question: "What is the context API used for?",
    answer: "To share data globally without prop drilling",
  },
  {
    id: 1047,
    question: "What is the difference between React and React Native?",
    answer: "React is for web apps, React Native is for mobile apps",
  },
  {
    id: 1048,
    question: "What is the purpose of useImperativeHandle?",
    answer:
      "To customize the instance value exposed to parent components when using refs",
  },
  {
    id: 1049,
    question: "What does the term 'pure component' mean in React?",
    answer:
      "A component that renders the same output for the same props and state",
  },
  {
    id: 1050,
    question: "What is server-side rendering (SSR) in React?",
    answer:
      "Rendering React components on the server before sending HTML to the client",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((card) => (
        <div
          key={card.id}
          onClick={() => {
            handleClick(card.id);
          }}
          className={card.id === selectedId ? "selected" : ""}
        >
          <p>{card.id === selectedId ? card.answer : card.question}</p>
        </div>
      ))}
    </div>
  );
}
