import React, { useState } from "react";
import "./AddNewStudent.css";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import actions from "../actions";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

function AddNewStudent() {
  const { isVisible } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleAddName() {
    console.log(name);
    if (name.length > 0) {
      dispatch({ type: actions.ADDNAME, payload: { id: uuidv4(), name } });
      setName("");
      dispatch({ type: actions.SWITCHMODALVISIBILITY });
    } else {
      alert("please enter valid name");
    }
  }
  return (
    <div
      id="myModal"
      className="modal"
      style={isVisible ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content">
        <input
          className="input"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button
            className="close"
            onClick={() => dispatch({ type: actions.SWITCHMODALVISIBILITY })}
          >
            &#10006;
          </button>
          <button className="close" onClick={handleAddName}>
            &#10004;
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewStudent;
