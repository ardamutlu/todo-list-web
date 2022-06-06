import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

interface Props {
  children?: React.ReactNode;
}

const StyledContent = styled.header`
  padding: 1rem 0;
  border-bottom: 1px solid #eeeeee;
`;

const Content: React.FC<Props> = ({ children }) => {
  return (
    <StyledContent>
      <Grid container>
        <Grid item>{children}</Grid>
      </Grid>
    </StyledContent>
  );
};

export default Content;
