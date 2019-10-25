import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DatePickerClass from "../others/DatePickerClass";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#2E2E2E",

    "&:hover": {
      backgroundColor: "#212121"
    }
  }
}));

export default function LocationsList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTabChange = val => {
    localStorage.setItem("tabState", val);
  };
  return (
    <div className="container">
      <div className="album py-2">
        <div className="row">
          {props.locations.map(locations => {
            return (
              <div className="col-md-4" key={locations.id}>
                <Card className="card mb-4 shadow-sm">
                  <CardActionArea
                    onClick={() => {
                      handleClickOpen();
                      setLocation(locations.name);
                    }}
                  >
                    <CardMedia
                      image={locations.imgUrl}
                      style={{ height: 0, paddingTop: "56.25%" }}
                      title={locations.name}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h2"
                        className="text-center"
                      >
                        {locations.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions style={{ justifyContent: "center" }}>
                    <Button

                      className={classes.button}
                      id="orangeBtn"
                      size="large"
                      onClick={() => {
                        handleClickOpen();
                        setLocation(locations.name);
                      }}
                    >
                      Book now
                    </Button>
                  </CardActions>
                  <Dialog open={open} onClose={handleClose} maxWidth="lg">
                    <div
                      className="flex-row px-4 justify-content-center"
                      id="popUp"
                    >
                      {props.shops.map(shops => {
                        if (location === shops.city) {
                          return (
                            <div className="py-4 px-3" key={shops.id}>
                              <Card
                                className="card shadow-sm"
                                id="dialogCard"
                                key={shops.id}
                              >
                                <CardActionArea>
                                  <CardMedia
                                    image={shops.imgUrl}
                                    style={{
                                      height: 0,
                                      paddingTop: "56.25%"
                                    }}
                                    title={shops.name}
                                  />
                                  <CardContent>
                                    <Typography
                                      gutterBottom
                                      variant="h4"
                                      component="h2"
                                      className="text-center"
                                    >
                                      {shops.name}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>

                                <CardActions
                                  style={{ justifyContent: "center" }}
                                >
                                  <Button
                                    className={classes.button}
                                    id="orangeBtn"
                                    size="large"
                                  >
                                    <MuiPickersUtilsProvider
                                      utils={MomentUtils}
                                    >
                                      <DatePickerClass />
                                    </MuiPickersUtilsProvider>
                                  </Button>
                                  <Button
                                    className={classes.button}
                                    id="orangeBtn"
                                    size="large"
                                    component={Link}
                                    selected
                                    to={{
                                      pathname: "/book",
                                      shopname: shops.name
                                    }}
                                    onClick={() => {
                                      handleTabChange(3);
                                    }}
                                  >
                                    Book
                                  </Button>
                                </CardActions>
                              </Card>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </Dialog>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
