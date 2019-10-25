import React, { useState, useEffect } from 'react';
import ShopForm from '../others/ShopForm';
import { saveShop } from '../../api/shopAPI';
import { getShops } from '../../api/shopAPI';

function AddLocation() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        getShops().then(_shops => setShops(_shops));
    }, []);

    let _id = 0;
    shops.forEach(s => {
        if (_id <= s.id) {
            _id = Number(s.id) + 1;
            console.log(_id);
        }
    });

    const [shop, setShop] = useState({
        id: _id,
        name: '',
        city: '',
        slots: '',
        openingTimes: '',
        closingTimes: '',
        services: [],
        imgUrl: '',
    });

    const handleChange = ({ target }) => {
        const updatedShop = { ...shop, [target.name]: target.value };
        setShop(updatedShop);
    };

    const handleSubmit = event => {
        event.preventDefault();
        saveShop(shop);

        getShops().then(_shops => setShops(_shops));
    };

    return (
        <div className='container'>
            <ShopForm
                shop={shop}
                onChange={handleChange}
                onSubmit={handleSubmit}
                id='orangeBtn'
            ></ShopForm>
        </div>
    );
}

export default AddLocation;
