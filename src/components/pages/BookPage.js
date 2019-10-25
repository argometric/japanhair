import React, { useState, useEffect } from 'react';
import CalendarPage from '../others/CalendarPage';
import { getShops } from '../../api/shopAPI';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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

    let title = 'Select shop';
    let page = '';

    if (shop !== undefined) {
        title = props.location.shopname;
        page = (
            <>
                <CalendarPage props={shop}></CalendarPage>
                <Button variant='outlined' onClick={reset}>
                    Change Location
                </Button>
            </>
        );
    } else {
        page = (
            <>
                <FormControl>
                    <InputLabel htmlFor='age-simple'>Select a shop</InputLabel>
                    <Select
                        onChange={handleChange}
                        value=''
                        style={{ width: '200px' }}
                    >
                        {shops.map(s => (
                            <MenuItem key={s.name} value={s.name}>
                                {s.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>
        );
    }
    return (
        <div className='container'>
            <h1>{title}</h1>
            {page}
        </div>
    );
};

export default TestPage;
