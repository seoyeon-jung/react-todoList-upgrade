import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/Todos";
import { v4 as uuidv4 } from "uuid";

const InputBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputText = styled.input`
  width: 600px;
  height: 15px;
  padding: 7px;
  margin: 10px;
`;

const InputBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: rgb(132, 149, 250);
  color: white;
  margin: 10px;

  &:hover {
    transform: scale(1.2);
  }
`;

const TodoInput = () => {
  const id = uuidv4();

  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: uuidv4(),
    title: "",
    text: "",
    check: false,
  });

  // changehandler
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    // 입력칸 공백 방지
    if (!todo.text || !todo.title) {
      alert("제목과 내용을 모두 입력하세요.");
      return;
    }

    dispatch(addTodo({ ...todo, id }));

    setTodo({
      id: uuidv4(),
      title: "",
      text: "",
      check: false,
    });
  };

  return (
    <InputBox>
      <InputText
        type="text"
        name="title"
        value={todo.title}
        onChange={onChange}
        placeholder="제목"
      />
      <InputText
        type="text"
        name="text"
        value={todo.text}
        onChange={onChange}
        placeholder="내용"
      />
      <InputBtn type="submit" onClick={onSubmit}>
        추가
      </InputBtn>
    </InputBox>
  );
};

export default TodoInput;
