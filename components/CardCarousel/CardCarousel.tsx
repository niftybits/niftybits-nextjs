import React, { useState, useEffect } from "react";
import Card from "./../Card";
import DotIndicator from "./../DotIndicator";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CarouselContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const CardContainer = styled(Card)({
  width: 320,
  height: 470,
  marginLeft: 16,
  background: "#10ac84",
  img: {
    height: "60%",
  },
  ":nth-of-type(1)": {
    marginLeft: 0,
  },
});

const CardCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onUpdate = (index: number) => {
    console.log("onUpdate", index);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (window) {
    }
  }, []);

  return (
    <Container>
      <CarouselContainer>
        <CardContainer
          title="Ape Gang#5929"
          description="Purchased August 2021"
          imageURL="apegang5929.png"
          color="red"
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="red"
        />
        <CardContainer
          title="Ape Gang#5929"
          description="Purchased August 2021"
          imageURL="apegang5929.png"
          color="red"
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="red"
        />
      </CarouselContainer>
      <DotIndicator length={5} activeIndex={activeIndex} onUpdate={onUpdate} />
    </Container>
  );
};

export default CardCarousel;
