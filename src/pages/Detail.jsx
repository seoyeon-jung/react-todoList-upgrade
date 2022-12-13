import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoID } from "../redux/modules/Todos";

const DetailBox = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailHeader = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;

const DetailBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: rgb(132, 149, 250);
  color: white;
  margin: 10px;

  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h3`
  margin: 10px;
`;

const Text = styled.p`
  padding: 50px;
`;

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoID(id));
  }, [dispatch, id]);

  return (
    <DetailBox>
      <DetailHeader>
        <div>ID : {id}</div>
        <DetailBtn
          onClick={() => {
            navigate("/");
          }}
        >
          메인으로 돌아가기
        </DetailBtn>
      </DetailHeader>

      <Title>{todo.title}</Title>
      <Text>{todo.text}</Text>
    </DetailBox>
  );
};

export default Detail;
