import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FormLabel } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
    maxWidth: 300,
    color: orange[500]
  },
  button: {
    backgroundColor: "#2E2E2E",
    minWidth: 200,
    maxWidth: 300,
    marginTop: 35,
    "&:hover": {
      backgroundColor: "#212121"
    }
  }
}));

function ShopForm(props) {
  const classes = useStyles();
  const [state, setState] = useState({});

  useEffect(() => {
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
              <InputLabel>Id</InputLabel>
              <Input
                name="id"
                value={props.shop.id}
                onChange={props.onChange}
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel>Name</InputLabel>
              <Input
                name="name"
                value={props.shop.name}
                onChange={props.onChange}
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel>City</InputLabel>
              <Input
                name="city"
                value={props.shop.city}
                onChange={props.onChange}
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel>Opening times</InputLabel>
              <Input
                name="openingTimes"
                value={props.shop.openingTimes}
                onChange={props.onChange}
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel>Closing times</InputLabel>
              <Input
                name="closingTimes"
                value={props.shop.closingTimes}
                onChange={props.onChange}
                autoComplete="off"
              />
            </FormControl>
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel>Slots</InputLabel>
              <Input
                name="slots"
                value={props.shop.slots}
                onChange={props.onChange}
              />
            </FormControl>
            <br />
            <br />
            <br />
            <FormControl className={classes.formControl}>
              <FormLabel>Services</FormLabel>
              <FormControlLabel
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
                className={classes.formControl}
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
                control={
                  <Checkbox
                    checked={c}
                    onChange={props.onService}
                    value="hair dyeing (60min)"
                  />
                }
                label="hair dyeing (60min)"
              />
            </FormControl>
            <br />
            <FormControl>
              <InputLabel>Logo</InputLabel>
              <Input
                name="imgUrl"
                value={props.shop.imgUrl}
                onChange={props.onChange}
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
