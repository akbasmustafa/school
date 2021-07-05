import React, { useState } from "react";
import AddNewStudent from "../components/AddNewStudent";
import StudentRow from "../components/StudentRow";
import "./Home.css";

import { useSelector, useDispatch } from "react-redux";
import actions, { switchmodalvisibility } from "../actions";

function Home() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div className="list">
      <button
        className="myButton"
        onClick={() => dispatch({ type: actions.SWITCHMODALVISIBILITY })}
      >
        &#x271A;
      </button>
      <AddNewStudent />
      <div className="row">
        <div>NAME</div>
        <div>Amount</div>
        <div>Score</div>
      </div>
      {students.reverse().map((student, index) => (
        <StudentRow key={index} student={student} />
      ))}
    </div>
  );
}

export default Home;
