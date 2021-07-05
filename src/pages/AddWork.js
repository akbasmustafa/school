import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../components/AddNewStudent.css";
import actions from "../actions";

function AddWork({ match }) {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");

  function handleSetWork() {
    if (
      title.length > 0 &&
      score.length > 0 &&
      parseInt(score) >= 0 &&
      parseInt(score) <= 100
    ) {
      dispatch({
        type: actions.ADDHOMEWORK,
        payload: { id: match.params.id, title, score: parseInt(score) },
      });
      setTitle("");
      setScore("");
      history.push("/");
    } else {
      alert("Please enter valid input");
    }
  }

  console.log(match.params);
  return (
    <div>
      <h1>{students.find((student) => student.id === match.params.id).name}</h1>
      <input
        className="input"
        placeholder="Work Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <div>
        <Link to={"/"}>
          <button className="close">&#10006;</button>
        </Link>
        <button className="close" onClick={handleSetWork}>
          &#10004;
        </button>
      </div>
    </div>
  );
}

export default AddWork;
