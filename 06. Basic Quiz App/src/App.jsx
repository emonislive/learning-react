// import { useState } from 'react'

import Quiz from "./components/Quiz";
import Card from "./components/Card";
import Title from "./components/Title";
import { quiz } from "./data/data";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Title />
      <Card>
        <Quiz quiz={quiz}>
          <Button />
        </Quiz>
      </Card>
    </>
  );
}

export default App;
