import React from "react";
import "./addGrocery.css";

function AddGrocery({ addItem, value, setValue, setGender }) {
  return (
    <div>
      <form onSubmit={addItem}>
        <input
          maxLength="20"
          className="bigInput"
          type="text"
          placeholder="Add Grocery"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bigInputButton" onClick={addItem}>
          Add
        </button>
      </form>
      <div>
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <input
          type="radio"
          value="Other"
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Other
      </div>
    </div>
  );
}

export default AddGrocery;
