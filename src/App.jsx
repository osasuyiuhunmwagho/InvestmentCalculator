import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Results";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 100,
    duration: 2,
  });

  function handleChange(inputId, newValue) {
    // handleChange updates a single field in the userInput state object
    // - inputId: field name to update (string)
    // - newValue: new value for the field
    // The function uses the functional form of setState to safely update based on previous state
    // The [inputId] syntax (computed property) dynamically sets the property name based on which input changed
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />

      {inputIsValid ? (
        <Result input={userInput} />
      ) : (
        <p className="center">Message is invalid</p>
      )}
    </>
  );
}

export default App;
