import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/Todos";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InputText = styled.input`
  width: 400px;
  height: 15px;
  padding: 7px;
  margin: 15px;
`;

const InputBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: rgb(180, 190, 251);
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
      // app.js 에 <ToastContainer /> 추가
      // 최상위 컴포넌트에 존재하므로 하위 컴포넌트 어디에서나 사용 가능
      // => 최적화에 좋다 (나중에 기획 의도 변경되어도 쉽게 사용 가능)
      toast.warning("제목과 내용 모두 입력해주세요!");
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
        ➕
      </InputBtn>
      {/* <ToastContainer /> */}
    </InputBox>
  );
};

export default TodoInput;
