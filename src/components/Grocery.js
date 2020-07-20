import React from "react";
import AddGrocery from "./AddGrocery/AddGrocery";
import ShowList from "./ShowList/ShowList";
import { useState } from "react";
import Layout from "../Layout/Layout";
import Toggler from "../components/Toggler/Toggler";
import SaveList from "./Toggler/SaveList/SaveList";

function Grocery() {
  const [groceryList, setGroceryList] = useState([
    {
      text: "kur",
      completed: true,
      editMode: false,
      value: "kur",
      gender: "kur",
    },
    {
      text: "putka",
      completed: true,
      editMode: false,
      value: "putka",
      gender: "puti",
    },
    {
      text: "mandarina",
      completed: false,
      editMode: true,
      value: "mandarina",
      gender: "eba",
    },
  ]);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [smallgender, setSmallGender] = useState("");

  const [thefullDate, setfullDate] = useState([
    {
      name: "putka",
      date: 1,
      items: groceryList,
    },
  ]);
  const [saverValue, setsaverValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [savesmallText, setsavesmallText] = useState({
    text: "",
    transition: false,
  });

  const addAll = (e) => {
    e.preventDefault();
    if (!value) return alert("Please Fill the field!");
    if (!gender) return alert("Please Fill the Radio field!");
    const items = [
      ...groceryList,
      {
        text: value,
        completed: false,
        editMode: false,
        value: value,
        gender: gender,
      },
    ];
    setGroceryList(items);
    setValue("");
  };

  const deleteItem = (index) => {
    const deleter = [...groceryList];
    deleter.splice(index, 1);
    setGroceryList(deleter);
  };

  const complete = (index) => {
    const completer = [...groceryList];
    completer[index].completed = !completer[index].completed;

    setGroceryList(completer);
  };

  const changeItem = (index) => {
    const changeItemer = [...groceryList];
    changeItemer[index].editMode = !changeItemer[index].editMode;
    setGroceryList(changeItemer);
  };

  const changeSmallText = (e, index) => {
    const changeItemer = [...groceryList];
    changeItemer[index].value = e;
    setGroceryList(changeItemer);
  };

  const changeSmallRadio = (e, index) => {
    console.log(e);
    setSmallGender(e);
    console.log(smallgender);
  };
  console.log(smallgender);
  const thisisCancel = (index) => {
    const changeItemer = [...groceryList];
    changeItemer[index].editMode = !changeItemer[index].editMode;
    changeItemer[index].value = changeItemer[index].text;
    setGroceryList(changeItemer);
  };

  const submitSmallText = (index) => {
    const changeItemer = [...groceryList];
    if (!changeItemer[index].value) return alert("Please Fill the field!");
    changeItemer[index].text = changeItemer[index].value;
    changeItemer[index].gender = smallgender;
    changeItemer[index].editMode = !changeItemer[index].editMode;
    setGroceryList(changeItemer);
  };

  const saveUpShit = () => {
    if (!groceryList.length) return alert("Please Add Some Items");
    if (saverValue === "") return alert("Please Write name");
    let date = new Date();
    const dates = [
      ...thefullDate,
      { name: saverValue, date: date.toDateString(), items: groceryList },
    ];
    setfullDate(dates);

    setsaverValue("");

    setsavesmallText({
      text: "succsesfully saved!",
      transition: true,
    });

    setInterval(
      function backUp() {
        setsavesmallText({
          text: "",
          transition: false,
        });
      },

      3000
    );
  };

  const addbackToShowList = (index) => {
    const completer = [...thefullDate];

    setGroceryList(completer[index].items);
  };

  const deleteSaveIndex = (index) => {
    const completer = [...thefullDate];
    completer.splice(index, 1);
    setfullDate(completer);
  };

  const checkAll = () => {
    const items = [...groceryList];

    for (let i = 0; i < items.length; i++) {
      items[i].completed = true;
    }
    setGroceryList(items);
  };

  const uncheckAll = () => {
    const items = [...groceryList];

    for (let i = 0; i < items.length; i++) {
      items[i].completed = false;
    }
    setGroceryList(items);
  };

  const clearAll = () => {
    setGroceryList([]);
  };

  const clearAllhistory = () => {
    setfullDate([]);
  };

  const togglerClick = () => {
    setToggle(!toggle);
  };
  return (
    <Layout
      numberItems={thefullDate.length}
      togglerClick={togglerClick}
      toggler={toggle}
      togglera={
        <Toggler
          toggle={toggle}
          dateItems={thefullDate}
          addbackToShowList={addbackToShowList}
          deleteSaveIndex={deleteSaveIndex}
          thefullDate={thefullDate}
          clearAllhistory={clearAllhistory}
        />
      }
    >
      <AddGrocery
        value={value}
        setValue={setValue}
        addItem={addAll}
        setGender={setGender}
      />

      <ShowList
        groceries={groceryList}
        deleteItem={deleteItem}
        complete={complete}
        changeItem={changeItem}
        changeSmallText={changeSmallText}
        thisisCancel={thisisCancel}
        submitSmallText={submitSmallText}
        setGender={changeSmallRadio}
      />
      <SaveList
        saverValue={saverValue}
        setsaverValue={setsaverValue}
        saveUpShit={saveUpShit}
        checkAll={checkAll}
        uncheckAll={uncheckAll}
        clearAll={clearAll}
        savesmallText={savesmallText}
      />
    </Layout>
  );
}

export default Grocery;
