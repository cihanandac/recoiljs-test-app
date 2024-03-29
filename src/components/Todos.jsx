import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import Todo from "./Todo";
import { totalTodos } from "../state/selectors/TotalTodos";

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");
  const totalTodoState = useRecoilValue(totalTodos);

  function addTodo() {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function clearTodos() {
    setTodos([]);
    setInputText("");
  }

  return (
    <main>
      <div>Total Todos: {totalTodoState}</div>
      <input
        value={inputText}
        onChange={handleInputChange}
        type="text"
        id="todoInput"
      ></input>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear Todos</button>
      <div>
        {todos.map((todo) => (
          <Todo text={todo.text} id={todo.id} />
          // <p key={todo.id}>{todo.text}</p>
        ))}
      </div>
    </main>
  );
}
