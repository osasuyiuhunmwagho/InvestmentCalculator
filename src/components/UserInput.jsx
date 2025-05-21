import React, { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial Investment </label>
          <input
            id="user-input"
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label> Annual Investment </label>
          <input
            id="user-input"
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> expected Return </label>
          <input
            id="user-input"
            type="number"
            //The problem is that you're immediately executing the handleChange function when the component renders
            //, rather than creating a function that will be called when the onChange event happens
            value={userInput.expectedReturn}
            required
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label> Duration </label>
          <input
            id="user-input"
            type="number"
            //The problem is that you're immediately executing the handleChange function when the component renders
            //, rather than creating a function that will be called when the onChange event happens
            required
            value={userInput.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
