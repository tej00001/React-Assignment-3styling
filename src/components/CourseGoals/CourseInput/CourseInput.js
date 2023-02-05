import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`form-control ${
          !isValid ? "invalid" : ""
        }`} /*this is for css styling*/
      >
        <label /*style={{ color: !isValid ? "red" : "black" }} this is another type styling*/
        >
          Course Goal
        </label>
        <input
          type="text"
          /*style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "yellow" : "white",
          }}*/
          onChange={goalInputChangeHandler}
        />

        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
