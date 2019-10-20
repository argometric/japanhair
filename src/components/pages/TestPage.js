import React, { useState, useEffect } from "react";
import CalendarPage from "../others/CalendarPage";
import { getShops } from "../../api/shopAPI";

const TestPage = props => {
  const [shop, setShop] = useState(props.location.shopname);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(_shops => setShops(_shops));
  }, []);

  const handleChange = s => {
    setShop(s.target.value);
  };

  const reset = () => {
    setShop(undefined);
  };

  let title = "Select shop";
  let page = "";

  if (shop !== undefined) {
    title = props.location.shopname;
    page = (
      <>
        <CalendarPage props={shop}></CalendarPage>
        <button onClick={reset}>Change Location</button>
      </>
    );
  } else {
    page = (
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled></option>
        {shops.map(s => (
          <option key={s.name} value={s.name}>
            {s.name}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      {page}
    </div>
  );
};

export default TestPage;
