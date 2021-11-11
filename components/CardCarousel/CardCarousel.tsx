import React, { useState, useEffect } from "react";
import Card from "./../Card";
import DotIndicator from "./../DotIndicator";
import { styled } from "@mui/material/styles";
import type { CardContainerVariant } from "components/Card/Card";

interface CardCarouselProps {
  cardContainerVariant?: CardContainerVariant;
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const CarouselContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  overflow: "hidden",
});

const CardContainer = styled(Card)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  background: "#10ac84",
  ":nth-of-type(1)": {
    marginLeft: 0,
  },
}));

const CardCarousel: React.FC<CardCarouselProps> = ({
  cardContainerVariant,
}) => {
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
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Ape Gang#5929"
          description="Purchased August 2021"
          imageURL="apegang5929.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
        <CardContainer
          title="Toucan Gang#2107"
          description="Purchased August 2021"
          imageURL="toucangang2107.png"
          color="#10ac84"
          containerVariant={cardContainerVariant}
        />
      </CarouselContainer>
      <DotIndicator length={5} activeIndex={activeIndex} onUpdate={onUpdate} />
    </Container>
  );
};

export default CardCarousel;
