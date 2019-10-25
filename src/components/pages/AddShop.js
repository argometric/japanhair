import React, { useState, useEffect } from "react";
import ShopForm from "../others/ShopForm";
import { saveShop } from "../../api/shopAPI";
import { getShops } from "../../api/shopAPI";

function AddLocation() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(_shops => setShops(_shops));
  }, []);

  let _id = 0;
  shops.forEach(s => {
    if (_id <= s.id) {
      _id = Number(s.id) + 1;
    }
  });

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

  return (
    <div className="container">
      <ShopForm
        shop={shop}
        onChange={handleChange}
        onService={handleService}
        onSubmit={handleSubmit}
        id="orangeBtn"
      ></ShopForm>
    </div>
  );
}

export default AddLocation;
