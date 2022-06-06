import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const StyledCode = styled.code`
  padding: 4px 8px;
`;

const Code: React.FC<Props> = ({ children }) => {
  return <StyledCode>{children}</StyledCode>;
};

export default Code;
