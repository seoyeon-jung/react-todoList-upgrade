import React from "react";
import styled from "styled-components";

const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 50px;
`;

const Header = () => {
  return (
    <TodoHeader>
      <h1>오늘 뭐하지?🤔</h1>
    </TodoHeader>
  );
};

export default Header;
