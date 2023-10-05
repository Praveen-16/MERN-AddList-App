import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDO, deleteToDO, getAllToDo, updateTodo } from "./utils/HandleApi";

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>List Of Tasks</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDO({ text, setText, setToDo })
            }
          >
            {isUpdating ? "Update" : " Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDO={() => deleteToDO(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
