import React from "react";
import styled from "styled-components";

const ItemBox = styled.div`
  width: 650px;
  margin: auto;
  background-color: rgb(162, 208, 249);
  border-radius: 20px;
`;

const ToggleBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: rgb(131, 255, 127);
  color: #fff;
  margin: 20px;
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
  margin: 30px;
  font-size: 20px;
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

const DetailLink = styled.div`
  text-decoration: none;
`;

const TodoItem = ({ item, onToggle, onDelete }) => {
  const { id, title, text, check } = item;

  return (
    <li>
      <ItemBox>
        <DetailLink to={`/${item.id}`} key={item.id}>
          <div>상세보기</div>
        </DetailLink>
        <div>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
        <ToggleBtn onClick={() => onToggle(id)}>
          {check ? <>취소</> : <>완료</>}
        </ToggleBtn>
        <DelBtn onClick={() => onDelete(id)}>삭제</DelBtn>
      </ItemBox>
    </li>
  );
};

export default TodoItem;
