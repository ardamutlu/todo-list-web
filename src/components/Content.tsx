import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const StyledContent = styled.div`
  border-bottom: 1px solid #eeeeee;
`;

const Content: React.FC<Props> = ({ children }) => {
  return <StyledContent className="py-3">{children}</StyledContent>;
};

export default Content;
