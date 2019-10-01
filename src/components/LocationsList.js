import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#2E2E2E",
    color: "white",
    "&:hover": {
      backgroundColor: "#212121"
    }
  }
}));

export default function LocationsList(props) {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="album py-2">
        <div className="row">
          {props.locations.map(locations => {
            return (
              <div className="col-md-4" key={locations.id}>
                <Card className="card mb-4 shadow-sm">
                  <CardActionArea>
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
                  <div className="text-center">
                    <h4>{locations.phone}</h4>
                    <h4>{locations.email}</h4>
                  </div>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      className={classes.button}
                      id="orangeBtn"
                      size="large"
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
