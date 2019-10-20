import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [booked, setBooked] = React.useState(false);

  const services = [];

  for (let key of Object.keys(props.service)) {
    if (props.service[key]) {
      services.push(key);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBook = () => {
    setOpen(false);
    setBooked(true);
  };
    return (
    <>
      <button color="primary" onClick={handleClickOpen}>
        {props.value}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Book a timeslot</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <select>
                <option>None</option>
                {services.map(service => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={(handleClose, handleBook)} color="primary">
            Book
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
