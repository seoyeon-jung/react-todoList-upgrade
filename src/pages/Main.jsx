import React from "react";
import Header from "../components/UI/Header";
import TodoInput from "../components/features/TodoInput";
import TodoList from "../components/features/TodoList";

const Main = () => {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Main;
