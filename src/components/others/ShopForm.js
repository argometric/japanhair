import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, FormGroup } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import { getLocations } from "../../api/locationApi";
import MenuItem from "@material-ui/core/MenuItem";
import AddLocationDialog from "./AddLocationDialog";
import SelectTime from "../common/TimePickerClass";
import ImageUpload from "../common/CloudinaryImageUploader";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 300,
    color: orange[500]
  },
  dropzone: {
    height: 200,
    overflow: "hidden"
  },
  button: {
    backgroundColor: "#2E2E2E",
    width: 300,
    marginTop: 35,
    "&:hover": {
      backgroundColor: "#212121"
    }
  }
}));

function ShopForm(props) {
  const classes = useStyles();
  const [state, setState] = useState({});
  const [locations, setLocations] = useState([]);
  const [otime, setOtime] = useState(props.shop.openingTimes);

  const handleNewLocation = () => {
    getLocations().then(_locations => setLocations(_locations));
  };

  const handleTimes = target => {
    console.log(target._d);
    setOtime(target);
    console.log("--------");
    console.log(otime);
    props.onChange(otime);
  };

  useEffect(() => {
    getLocations().then(_locations => setLocations(_locations));
    setState(props.shop.service);
  }, [props.shop.service]);

  const { a, b, c } = state;

  return (
    <>
      <div className="title text-center">
        <h1>Add shop</h1>
      </div>

      <form onSubmit={props.onSubmit}>
        <div className="row text-center">
          <div className="col">
            <FormControl className={classes.formControl}>
              <TextField
                label="Name"
                value={props.shop.name}
                name="name"
                onChange={props.onChange}
                helperText={props.errors.name}
                error={props.errors.name === "Name is required"}
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <TextField
                className="text-left"
                label="City"
                name="city"
                select
                value={props.shop.city}
                onChange={props.onChange}
                helperText={props.errors.city}
                error={props.errors.city === "City is required"}
              >
                {locations.map(option => (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <FormControl className="text-left">
                <AddLocationDialog
                  onChange={handleNewLocation}
                  title="Add city"
                  input="Add new city"
                ></AddLocationDialog>
              </FormControl>
            </FormControl>
            <br /> <br />
            <FormControl className={classes.formControl}>
              <SelectTime
                label="Opening Times"
                value={otime}
                onChange={handleTimes}
                name="openingTimes"
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <TextField
                label="Closing times"
                value={props.shop.closingTimes}
                name="closingTimes"
                onChange={props.onChange}
                helperText={props.errors.closingTimes}
                error={
                  props.errors.closingTimes === "Closing-times are required"
                }
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <TextField
                label="Slots"
                value={props.shop.slots}
                name="slots"
                onChange={props.onChange}
                helperText={props.errors.slots}
                error={props.errors.slots === "Amount of slots are required"}
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <TextField
                label="Services"
                disabled
                name="slots"
                onChange={props.onChange}
                helperText={props.errors.service}
                error={
                  props.errors.service ===
                  "At least one service must be selected"
                }
              />
              <FormGroup className="ml-3">
                <FormControlLabel
                  className="mb-0"
                  control={
                    <Checkbox
                      checked={a}
                      onChange={props.onService}
                      value="cutting (30 min)"
                    />
                  }
                  label="cutting (30 min)"
                />
                <FormControlLabel
                  className="mb-0"
                  control={
                    <Checkbox
                      checked={b}
                      onChange={props.onService}
                      value="cutting and washing (45 min)"
                    />
                  }
                  label="cutting and washing (45 min)"
                />
                <FormControlLabel
                  className="mb-0"
                  control={
                    <Checkbox
                      checked={c}
                      onChange={props.onService}
                      value="hair dyeing (60min)"
                    />
                  }
                  label="hair dyeing (60min)"
                />
              </FormGroup>
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              {/* <TextField
                value={props.shop.imgUrl}
                name="imgUrl"
                onChange={props.onChange}
                disabled
                label="Logo"
              /> */}

              <ImageUpload
                label="Logo"
                name="imgUrl"
                value={props.shop.imgUrl}
                onChange={props.onChange}
                helperText={props.errors.imgUrl}
                error={props.errors.slots === "Amount of slots are required"}
              />
            </FormControl>
            <br />
            <Button
              variant="outlined"
              site="large"
              type="submit"
              value="Save"
              id="orangeBtn"
              className={classes.button}
              // component={Link}
              // to="/book"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ShopForm;
