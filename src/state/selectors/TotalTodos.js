import { todoState } from "../atoms/TodoState";
import { selector } from "recoil";

export const totalTodos = selector({
  key: 'totalTodos',
  get: ({get}) => {
    const ts = get(todoState);
    return ts.length;
  }
})