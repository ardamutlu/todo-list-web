import React from "react";
import styled from "styled-components";
import { Grid, Typography, Link } from "@mui/material";
import Code from "@components/Code";

const StyledFooter = styled.footer`
  padding: 1rem;
  background-color: #eeeeee;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item xs={6}>
          <Code>git</Code>
          <Link
            href="https://github.com/ardamutlu/todo-list-web"
            target="_blank"
          >
            repository
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">© 2022 Rise Tech</Typography>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
