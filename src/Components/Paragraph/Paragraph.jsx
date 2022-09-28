import "./Paragraph.css";
import { useState } from "react";
const Paragraph = (props) => {
  const [newFruit, setNewFruit] = useState("");
  const [showForm, setShowForm] = useState(false);
  //Helper function for adding to state
  const addHandler = (e) => {
    e.preventDefault();
    if (!newFruit) {
      console.log("Add a fruit bossu");
    } else {
      props.submitHandler(newFruit);
      setNewFruit("");
      setShowForm(false);
    }
  };
  const showFormHandler = () => {
    setShowForm(true);
  };
  return (
    <div>
      <h1>List of fruits</h1>
      {/* applying conditional rendering saying if the is nothing in the  fruits array, do not render an empty page */}
      <div>
        {props.fruits.map((fruit, index) => (
          <div
            className="fruit"
            key={`fruit${index + 1}`}
            onDoubleClick={() => props.changeHandler(index)}
          >
            <p>{fruit}</p>
            <button
              className="delete"
              onClick={() => props.deleteHandler(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className={`add-btn ${showForm ? "hide-add-btn" : ""}`}
          onClick={showFormHandler}
        >
          Add New Fruit
        </button>
      </div>
      <form onSubmit={addHandler} className={showForm ? "show-form" : ""}>
        {/* && is a way of adding a ternary operator without an else. eg. showForm && "show-form" using it for non boolean attributes like classname will work however it will throw an error to the console*/}
        <input
          type="text"
          id="fruit-add"
          placeholder="Figs, Kiwis..."
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          //for checkboxes, setNewfruit(e.currentTarget.checked)
          //UseState will be set to false
          //checkboxes also take in a checked attribute which is false when unchecked so set it to reminder state
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Paragraph;
//   <div className="paragraph">
//     <p className="react" onClick={changeHandler}>
//       Helloooooo, I am {props.name}, I am {props.age} years old
//     </p>
//     <input type="text" onChange={props.changed} />
//   </div>
