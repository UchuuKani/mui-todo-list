import { v4 as uuidv4 } from "uuid";

import { ITodo } from "./components/TodoListItem";

export const todosData: ITodo[] = [
  {
    id: uuidv4(),
    name: "Buy groceries",
    description: "eggs, chicken thighs are priority",
  },
  {
    id: uuidv4(),
    name: "Buy lightbulbs",
  },
  {
    id: uuidv4(),
    name: "Buy mattress ",
  },
];
