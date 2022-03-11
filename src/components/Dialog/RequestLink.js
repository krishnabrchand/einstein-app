import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import { purple, lightGreen } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple["A400"],
    "&:hover": {
      backgroundColor: lightGreen[900],
    },
  },
}))(Button);

const SubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[900],
    },
  },
}))(Button);

export default function RequestLinkDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButton
        endIcon={<Icon>send</Icon>}
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Request for a registration link
      </ColorButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Request HyperFund registration link
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="country"
            label="Country"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <SubmitButton onClick={handleClose} color="primary">
            Submit Request
          </SubmitButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
