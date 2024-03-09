import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

export default function Todo({ text, id }) {
  const setTodos = useSetRecoilState(todoState);

  function deleteTodo() {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "space-around",
      }}
    >
      <span>{text}</span>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
