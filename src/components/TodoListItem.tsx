import React from "react";

import ListItem from "@material-ui/core/ListItem";

export interface ITodo {
  id: string;
  name: string;
  description?: string;
}

interface IProps {
  todoInfo: ITodo;
}

const TodoListItem: React.FC<IProps> = (props) => {
  const {
    todoInfo: { name, description, id },
  } = props;

  console.log(id);

  let todoDescription;
  if (description && description.length > 0) todoDescription = description;
  return (
    <ListItem>
      <p>{name}</p>
      <p>{todoDescription}</p>
    </ListItem>
  );
};

export default TodoListItem;
