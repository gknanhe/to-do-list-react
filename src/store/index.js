import { proxy } from "valtio";

const state = proxy({
  todos: [],
});

export default state;
