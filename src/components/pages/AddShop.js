import React, { useState, useEffect, Component } from "react";
import ShopForm from "../others/ShopForm";
import { saveShop } from "../../api/shopAPI";
import { getShops } from "../../api/shopAPI";

function AddLocation() {
  let _id = 0;

  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(_shops => setShops(_shops));
  }, []);

  console.log(_id);

  const [shop, setShop] = useState({
    id: _id,
    name: "",
    city: "",
    slots: "",
    openingTimes: "",
    closingTimes: "",
    service: {
      "cutting (30 min)": false,
      "cutting and washing (45 min)": false,
      "hair dyeing (60min)": false
    },
    imgUrl: ""
  });

  const handleChange = ({ target }) => {
    console.log(target.value);
    const updatedShop = { ...shop, [target.name]: target.value };
    setShop(updatedShop);
  };

  const handleService = ({ target }) => {
    for (const key in shop.service) {
      if (key === target.value) {
        shop.service[key] = !shop.service[key];
      }
    }
    console.log(shop.service);
  };

  const handleSubmit = event => {
    event.preventDefault();
    saveShop(shop);

    getShops().then(_shops => setShops(_shops));
  };

  const getData = () => {
    shops.forEach(s => {
      if (_id <= s.id) {
        shop.id = Number(s.id) + 1;
      }
    });
  };

  return (
    getData(),
    (
      <div className="container">
        <ShopForm
          shop={shop}
          onChange={handleChange}
          onService={handleService}
          onSubmit={handleSubmit}
          id="orangeBtn"
        ></ShopForm>
      </div>
    )
  );
}

export default AddLocation;
