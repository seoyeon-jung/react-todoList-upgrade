import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/modules/Todos";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";

const ListBox = styled.div`
  list-style: none;
  width: 700px;
  height: 600px;
  margin: auto;
  background-color: aliceblue;
  border-radius: 20px;
  overflow-y: scroll;
  padding-bottom: 30px;
  border: 1px solid black;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todos);

  // delete
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // toggle
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ListBox>
      <h2>{check ? "완료" : "진행 중"}</h2>
      {todo.map(
        (item) =>
          item.check === check && (
            <TodoItem
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDel={onDelete}
            />
          )
      )}
    </ListBox>
  );
};

export default TodoList;
