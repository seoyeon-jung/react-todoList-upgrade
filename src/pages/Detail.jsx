import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoID } from "../redux/modules/Todos";

const DetailBox = styled.div`
  width: 600px;
  height: 350px;
  background-color: #f0ecf4;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: auto;
`;

const DetailHeader = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;

const DetailID = styled.div`
  color: #323232;
  margin-left: 20px;
`;

const DetailBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: rgb(113, 122, 174);
  color: white;
  margin: 10px;

  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h3`
  margin: 10px;
  color: #323232;
  font-size: 35px;
  text-align: center;
`;

const Text = styled.p`
  color: #323232;
  font-size: 20px;
  text-align: center;
`;

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  //console.log(todo);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoID(id));
  }, [dispatch, id]);

  return (
    <DetailBox>
      <DetailHeader>
        <DetailID>ID : {todo.id}</DetailID>
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
