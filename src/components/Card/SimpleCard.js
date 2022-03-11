import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#cfd8dc",
    opacity: ".9",
    color: "#01579b",
  },
  textSecondary: {
    color: "#000",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const { text, author } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          "{text}"
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
}
