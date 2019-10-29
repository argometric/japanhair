import React, { useState, useEffect } from "react";
import ShopForm from "../others/ShopForm";
import { saveShop } from "../../api/shopAPI";
import { getShops } from "../../api/shopAPI";

function AddLocation() {
  let _id = 0;

  const [shops, setShops] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getShops().then(_shops => setShops(_shops));
  }, []);

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
    const updatedShop = { ...shop, [target.name]: target.value };
    setShop(updatedShop);
  };

  const handleService = ({ target }) => {
    for (const key in shop.service) {
      if (key === target.value) {
        shop.service[key] = !shop.service[key];
      }
    }
  };

  function formIsValid() {
    const _errors = {};

    if (!shop.name) _errors.name = "Name is required";
    if (!shop.city) _errors.city = "City is required";
    if (!shop.slots) _errors.slots = "Amount of slots are required";
    if (!shop.openingTimes) _errors.openingTimes = "Opening-times are required";
    if (!shop.closingTimes) _errors.closingTimes = "Closing-times are required";
    if (!shop.imgUrl) _errors.imgUrl = "Logo is required";

    let checkedService = false;
    for (var prop in shop.service) {
      if (shop.service[prop]) checkedService=true;
    }
    if (!checkedService) _errors.service = "At least one service must be selected";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!formIsValid()) return;
    saveShop(shop);
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
          errorCheck={formIsValid}
          errors={errors}
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
