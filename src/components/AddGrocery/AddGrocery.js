import React from "react";
import "./addGrocery.css";

function AddGrocery({ addItem, value, handleInput, title, handleSelect }) {
  return (
    <div>
      <form onSubmit={addItem}>
        <select value={title} onChange={(e) => handleSelect(e.target.value)}>
          <option>Banana</option>
          <option>yahr</option>
          <option>anab</option>
        </select>
        <input
          maxLength="20"
          className="bigInput"
          type="text"
          placeholder="Add Grocery"
          value={value}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button className="bigInputButton" onClick={addItem}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddGrocery;
