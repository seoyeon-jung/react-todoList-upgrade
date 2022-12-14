import React from "react";
import Header from "../components/UI/Header";
import TodoInput from "../components/features/TodoInput";
import TodoList from "../components/features/TodoList";
import Layout from "../components/UI/Layout";

const Main = () => {
  return (
    <Layout>
      <Header />
      <TodoInput />
      <TodoList />
    </Layout>
  );
};

export default Main;
