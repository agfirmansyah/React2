import React from "react";

const Item = ({ todo, index, deleteTodo }) => (
  <li>
    <input defaultValue={todo} readonly />
    <button> classView="remove" onClick={() => deleteTodo(todo)}> x</button>
  </li>
);

export default Item;
