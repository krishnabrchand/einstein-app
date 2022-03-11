import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import RequestLinkDialog from "components/Dialog/RequestLink.js";
import WhyJoinHFDialog from "components/Dialog/WhyJoinHF.js";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { purple } from "@material-ui/core/colors";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // backgroundColor: "#b0bec5",
    // opacity: "1",
    color: "#212121",
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

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[800],
    height: "70px",
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: purple[900],
    },
  },
}))(Button);

export default function InfoCard(props) {
  const classes = useStyles();
  return (
    <GridContainer spacing={2}>
      <GridItem xs={12} md={12}>
        <Card className={classes.root} style={{ backgroundColor: "#cfd8dc" }}>
          <CardContent>
            <Typography
              style={{ fontWeight: 700, color: "#4a148c", textAlign: "center" }}
              gutterBottom
              variant="h4"
              component="h2"
            >
              An Independent HyperCommunity Builder
            </Typography>
            <Typography gutterBottom variant="h4" component="h2">
              Join HyperFund now and take advantage of this unique and powerful
              membership and reward program.
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="h5"
              style={{ color: "#bf360c" }}
            >
              Please Note: <b>DO NOT</b> request for a registration link, if you
              are already a HyperFund member.
            </Typography>
          </CardContent>

          <CardActions>
            <GridContainer
              spacing={2}
              style={{ width: "100%", textAlign: "center" }}
            >
              <GridItem xs={12} md={6}>
                <Link to="/req-link">
                  <ColorButton
                    endIcon={<Icon>send</Icon>}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    Request for a registration link
                  </ColorButton>
                </Link>
              </GridItem>

              <GridItem xs={12} md={6}>
                {/* <RequestLinkDialog /> */}
                <WhyJoinHFDialog />
              </GridItem>
            </GridContainer>
          </CardActions>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
