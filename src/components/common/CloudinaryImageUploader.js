import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function CloudinaryImageUploader(props) {
  const [image, setImage] = useState("");
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: "dle7j0k6n", upload_preset: "q5xggjvy", tags: ["xmas"] },
      function(error, result) {
        if (result.event === "success") {
          setImage(result.info.url);
          props.onChange("imgUrl", result.info.url);
        }
      }
    );
  };

  return (
    <>
      <TextField value={image} name="imgUrl" label={props.label} disabled />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={uploadWidget}
        name="imgUrl"
        value={image}
      >
        Upload Logo
      </Button>
    </>
  );
}

export default CloudinaryImageUploader;
