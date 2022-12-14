import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/modules/Todos";
import { Link } from "react-router-dom";

const ListBox = styled.div`
  list-style: none;
  max-width: 1000px;
  min-width: 600px;
  height: 500px;
  margin: auto;
  background-color: #f0ecf4;
  border-radius: 20px;
  overflow-y: scroll;
  padding-bottom: 30px;
  border: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemBox = styled.div`
  max-width: 500px;
  min-width: 300px;
  background-color: rgb(220, 173, 250);
  border-radius: 20px;
  margin: auto;
  margin-bottom: 20px;
`;

const ToggleBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: rgb(95, 59, 240);
  color: #fff;
  margin: 10px;
  font-size: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

const DelBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: rgb(248, 90, 90);
  color: #fff;
  margin: 10px;
  font-size: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h3`
  margin: 10px;
  color: #fff;
  font-size: 35px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;

const DetailLink = styled(Link)`
  text-decoration: none;
  margin: auto;
  color: rgb(214, 240, 238);
  &:hover {
    color: black;
  }
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  // delete
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // toggle
  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <ListBox>
        <h2>진행중</h2>
        <div>
          {todos.map((todo) => {
            if (!todo.check) {
              return (
                <ItemBox key={todo.id}>
                  <DetailLink to={`/${todo.id}`} key={todo.id}>
                    <div>자세히 보기</div>
                  </DetailLink>
                  <Title>{todo.title}</Title>
                  <Text>{todo.text}</Text>
                  <ToggleBtn onClick={() => onToggle(todo.id)}>
                    {todo.check ? "취소" : "완료"}
                  </ToggleBtn>
                  <DelBtn onClick={() => onDelete(todo.id)}>삭제</DelBtn>
                </ItemBox>
              );
            } else return null;
          })}
        </div>
      </ListBox>
      <br />
      <ListBox>
        <h2>완료</h2>
        <div>
          {todos.map((todo) => {
            if (todo.check) {
              return (
                <ItemBox key={todo.id}>
                  <DetailLink to={`/${todo.id}`} key={todo.id}>
                    <div>상세보기</div>
                  </DetailLink>
                  <Title>{todo.title}</Title>
                  <Text>{todo.text}</Text>
                  <ToggleBtn onClick={() => onToggle(todo.id)}>
                    {todo.check ? "취소" : "완료"}
                  </ToggleBtn>
                  <DelBtn onClick={() => onDelete(todo.id)}>삭제</DelBtn>
                </ItemBox>
              );
            } else return null;
          })}
        </div>
      </ListBox>
    </div>
  );
};

export default TodoList;
