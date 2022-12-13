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
  const dispatch = useDispatch();
  const id = uuidv4();
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // changeHandler (title, text change)
  const changeTitleInput = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const changeTextInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  // onAdd (input에서 입력받은 값을 새로운 item으로 추가)
  const onAdd = (title, text) => {
    setTodo((prev) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          title,
          text,
          check: false,
        },
      ];
    });
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    // 입력칸 공백 방지
    if (!text || !title) {
      alert("제목과 내용을 모두 입력하세요.");
      return;
    }

    dispatch(addTodo({ ...todo, id }));

    onAdd(title, text);

    // 입력 후 다시 공백으로
    setTitle("");
    setText("");
  };

  return (
    <InputBox>
      <InputText
        type="text"
        value={title}
        onChange={changeTitleInput}
        placeholder="제목"
      />
      <InputText
        type="text"
        value={text}
        onChange={changeTextInput}
        placeholder="내용"
      />
      <InputBtn type="submit" onClick={onSubmit}>
        추가
      </InputBtn>
    </InputBox>
  );
};

export default TodoInput;
