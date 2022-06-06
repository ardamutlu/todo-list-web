import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const StyledCode = styled.code`
  padding: 4px 8px;
  font-size: 90%;
  border-radius: 4px;
  color: #f81d22;
  background: rgba(248, 29, 34, 0.1);
`;

const Code: React.FC<Props> = ({ children }) => {
  return <StyledCode>{children}</StyledCode>;
};

export default Code;
