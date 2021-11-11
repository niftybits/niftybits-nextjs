import React from "react";
import Card, { CardProps as MUICardProps } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export type CardContainerVariant = "tallboy" | "square" | "default";

interface CardProps {
  title: string;
  description: string;
  status?: string;
  imageURL: string;
  color: string;
  classes?: string;
  className?: string;
  variant?: MUICardProps["variant"];
  containerVariant?: CardContainerVariant;
}

interface CardContainerProps extends MUICardProps {
  containerVariant?: CardContainerVariant;
}

const CardContainerWidth = {
  default: "auto",
  tallboy: 320,
  square: `calc(50% - .5rem)`,
};

const CardContainerHeight: any = {
  tallboy: 470,
};

const CardContainer = styled(Card)<CardContainerProps>(
  ({ theme, containerVariant = "default", color }) => ({
    flex: "1 0 100%",
    backgroundColor: color,
    ...(containerVariant === "square" ? { aspectRatio: "1/1" } : {}),
    [theme.breakpoints.up("sm")]: {
      flex: "1 0 auto",
      width: CardContainerWidth[containerVariant],
      height: CardContainerHeight[containerVariant],
    },
    ...(containerVariant === "tallboy" || containerVariant === "square"
      ? {
          img: {
            height: "60%",
          },
        }
      : {}),
  })
);

CardContainer.defaultProps = {
  containerVariant: "default",
};

const MediaCard: React.FC<CardProps> = ({
  title,
  description,
  status,
  imageURL,
  color,
  classes,
  className,
  variant,
  containerVariant,
}) => {
  console.log("media card classes", className);
  return (
    <CardContainer
      className={className}
      variant={variant}
      color={color}
      containerVariant={containerVariant}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {status && (
        <CardActions>
          <Button size="small">{status}</Button>
        </CardActions>
      )}
    </CardContainer>
  );
};

export default MediaCard;
