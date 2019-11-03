import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getLocations, saveLocation } from "../../api/locationApi";

export default function InputDialog(props) {
  let _id = 0;
  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = useState({
    id: _id,
    name: "",
    imgUrl: ""
  });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then(_locations => setLocations(_locations));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = ({ target }) => {
    const updatedLocation = { ...location, [target.name]: target.value };
    setLocation(updatedLocation);
  };

  const handleSave = event => {
    event.preventDefault();
    saveLocation(location).then(() => {
      props.onChange();
    });
    setOpen(false);
  };

  const getId = () => {
    locations.forEach(l => {
      if (_id <= l.id) {
        location.id = Number(l.id) + 1;
      }
    });
  };

  return (
    getId(),
    (
      <div>
        <Button
          color="primary"
          fullWidth
          className="pl-0 pt-0"
          onClick={handleClickOpen}
          name={props.input}
        >
          {props.input}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <TextField
              name="name"
              onChange={props.handleChange}
              autoFocus
              label={props.input}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
}
