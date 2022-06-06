import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";

const StyledHeader = styled.header`
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.div`
  padding: 10px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Logo>Logo</Logo>
        </Grid>
      </Grid>
    </StyledHeader>
  );
};

export default Header;
