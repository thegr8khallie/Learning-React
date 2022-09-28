import "./App.css";
import Paragraph from "./Components/Paragraph/Paragraph";
import { useState } from "react";
const App = () => {
  const fruitArray = [
    "Orange",
    "Apple",
    "Grape",
    "Watermelon",
    "Pineapple",
    "Pear",
    "Peach",
  ];
  const [fruits, setFruits] = useState(fruitArray);
  //Sample function for deleting components in state
  const deleteHandler = (key) => {
    setFruits(fruits.filter((fruit, index) => index !== key));
  };
  //Sample function for adding components in lists
  const addFruithandler = (newFruit) => {
    //e.preventDefault();
    setFruits([...fruits, newFruit]);
  };
  //Sample function for changing component values in state
  const changeFruitHandler = (id) => {
    const newFruit = fruits.map((fruit, index) =>
      index === id ? "fruitchanged" : fruit
    );
    setFruits(newFruit);
  };
  return (
    <div className="App">
      <Paragraph
        fruits={fruits}
        deleteHandler={deleteHandler}
        submitHandler={addFruithandler}
        changeHandler={changeFruitHandler}
      />
    </div>
  );
};

export default App;

{
  /* <Paragraph name="Victor Anyadioha" age="21" />
        <Paragraph name="Gini Wijnaldum" age="31" />
        <Paragraph name="Federico Valverde" age="24" /> */
}
{
  /* <button>Toggle Visibility</button> */
}
