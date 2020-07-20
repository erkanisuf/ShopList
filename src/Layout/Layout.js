import React from "react";
import "./Layout.css";
import Paper from "@material-ui/core/Paper";

const Layout = (props) => {
  return (
    <div className="themain">
      <nav>
        <div>
          <h1 className="logo">GroceryList</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>Your List</li>
          <button onClick={props.togglerClick}>Toggler</button>

          <span>{props.numberItems}</span>
        </ul>
      </nav>
      <div
        className="theToggler"
        style={{ opacity: props.toggler ? "1" : "0" }}
      >
        {" "}
        <Paper>{props.togglera}</Paper>
      </div>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
