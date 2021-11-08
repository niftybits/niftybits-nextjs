import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const HeaderContainer = styled("div")({
  background: "#fff",
});

const Header = () => {
  return (
    <HeaderContainer>
      <Container maxWidth="xl">
        <div>$NiftyBits</div>
        <div>
          <div>@UserName</div>
          <div>1000 uB</div>
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
