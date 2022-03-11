import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { purple, deepPurple } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";

const WhyHFData = [
  { value: "Free world class blockchain and crypto education." },
  { value: "The most powerful rocket in blockchain technology." },
  { value: "Daily Passive rewards without selling anything to anybody." },
  { value: "Multiply your rewards with rebuys (optional)." },
  { value: "Once-in-a-lifetime business opportunity (optional)." },
  { value: "Add your rewards by sharing with your friend and family member." },
];

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple["A400"],
//     "&:hover": {
//       backgroundColor: lightGreen[900],
//     },
//   },
// }))(Button);

const ColorButtonA = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: deepPurple[500],
    height: "70px",
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: deepPurple[900],
    },
  },
}))(Button);

export default function WhyJoinHFDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButtonA
        endIcon={<QuestionAnswerIcon />}
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Why join HyperFund
      </ColorButtonA>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Why Join HyperFund</DialogTitle>
        <DialogContent>
          {/* <DialogContentText> */}
          <Grid container spacing={0}>
            <Grid item xs={12} md={12}>
              {/* <Typography variant="h6">Text only</Typography> */}
              <div>
                <List>
                  {WhyHFData.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar
                          style={{
                            color: "#f3e5f5",
                            backgroundColor: "#6a1b9a",
                          }}
                        >
                          <CheckIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.value} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
