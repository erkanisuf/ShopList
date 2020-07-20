import React from "react";
import "./ShowList.css";
import "font-awesome/css/font-awesome.min.css";
import Zoom from "@material-ui/core/Zoom";

function ShowList({
  groceries,
  deleteItem,
  complete,
  changeItem,
  changeSmallText,
  thisisCancel,
  submitSmallText,
  changeSmallSelect,
  titleValue,
}) {
  if (groceries.length === 0)
    return <h1 className="basich1">Your list is empty...</h1>;

  return (
    <div className="ShowList">
      <h1>Items added in {groceries.length} :</h1>

      {groceries.map((grocy, index) => {
        if (grocy.editMode) {
          return (
            <div className="theItems editMode" key={index}>
              <input
                className="smallInput"
                type="text"
                value={grocy.value}
                onChange={(e) => changeSmallText(e.target.value, index)}
                autoFocus
              />
              <select
                value={grocy.title}
                onChange={(e) => changeSmallSelect(e.target.value, index)}
              >
                <option>Banana</option>
                <option>yahr</option>
                <option>anab</option>
              </select>

              <div>
                <button
                  className="fa fa-times-circle btndelete"
                  onClick={() => thisisCancel(index)}
                ></button>
                <button
                  className="fa fa-check-circle-o"
                  onClick={() => submitSmallText(index)}
                ></button>
              </div>
            </div>
          );
        } else {
          return (
            <Zoom key={index} in={true} timeout={500}>
              <div className="theItems" value={grocy.text} key={index}>
                <p
                  style={{
                    textDecoration: grocy.completed ? "line-through" : "none",
                  }}
                  onDoubleClick={() => changeItem(index)}
                >
                  {" "}
                  {grocy.text}
                </p>
                <div style={{ textDecoration: "none!important" }}>
                  {grocy.title}
                </div>

                <div>
                  <button
                    className="fa fa-trash btndelete"
                    onClick={() => deleteItem(index)}
                  ></button>
                  <button
                    className={
                      grocy.completed
                        ? "fa fa-times-circle btndelete"
                        : "fa fa-check"
                    }
                    onClick={() => complete(index)}
                  ></button>
                  <button className="btnedit" onClick={() => changeItem(index)}>
                    edit
                  </button>
                </div>
              </div>
            </Zoom>
          );
        }
      })}
    </div>
  );
}

export default ShowList;
