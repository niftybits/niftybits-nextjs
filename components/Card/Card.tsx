import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardProps {
  title: string;
  description: string;
  status?: string;
  imageURL: string;
  color: string;
  classes?: string;
  className?: string;
}

const MediaCard: React.FC<CardProps> = ({
  title,
  description,
  status,
  imageURL,
  color,
  classes,
  className,
}) => {
  console.log("media card classes", className);
  return (
    <Card classes={classes} className={className}>
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
    </Card>
  );
};

export default MediaCard;
