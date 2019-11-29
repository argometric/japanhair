import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ImageUpload from "../common/CloudinaryImageUploader";
import locationStore from "../../stores/locationStore";
import { loadLocations, saveLocation } from "../../actions/locationActions";

export default function InputDialog(props) {
  let _id = 0;
  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = useState({
    id: _id,
    name: "",
    imgUrl:
      "https://res.cloudinary.com/dle7j0k6n/image/upload/v1572808205/xd0f9dhcl4itveew9ngv.jpg"
  });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    locationStore.addChangeListerner(onChange);
    if (locationStore.getLocations().length === 0) loadLocations();
    return () => locationStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setLocation(locationStore.getLocations());
  }

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

  const handleImage = (key, value) => {
    const updatedLocation = { ...location, [key]: value };
    setLocation(updatedLocation);
  };

  const handleSave = event => {
    event.preventDefault();
    saveLocation(location).then(() => {
      props.onChange();
      setLocations(locationStore.getLocations());
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
      <>
        <Button
          variant="outlined"
          fullWidth
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
              onChange={handleChange}
              autoFocus
              label={props.input}
              fullWidth
            />
          </DialogContent>
          <ImageUpload
            label="Logo"
            name="imgUrl"
            value={location.imgUrl}
            onChange={handleImage}
          ></ImageUpload>
          <DialogActions>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
}
