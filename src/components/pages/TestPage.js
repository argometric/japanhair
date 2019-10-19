import React from "react";
import CalendarPage from "../others/CalendarPage";

const TestPage = props => {
  let title = "Select shop";

  if (props.location.shopname !== undefined) {
    title = props.location.shopname;
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <CalendarPage props={props}></CalendarPage>
    </div>
  );
};

export default TestPage;
