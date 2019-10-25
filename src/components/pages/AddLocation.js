import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { saveLocations } from '../../api/locationApi';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 200,
        maxWidth: 300,
    },
}));

function AddLocation() {
    const classes = useStyles();
    const [service, setService] = React.useState([]);
    const services = ['cutting', 'cutting and washing', 'hair dyeing'];

    const handleChange = event => {
        setService(event.target.value);
    };

    return (
        <div className='container'>
            <div className='title text-center'>
                <h1>Add Location</h1>
            </div>
            <form>
                <FormControl className={classes.formControl}>
                    <InputLabel>Name</InputLabel>
                    <Input name='name' autoComplete='off' />
                </FormControl>
                <br />

                <FormControl className={classes.formControl}>
                    <InputLabel>City</InputLabel>
                    <Input name='city' autoComplete='off' />
                </FormControl>
                <br />

                <FormControl className={classes.formControl}>
                    <InputLabel>Slots</InputLabel>
                    <Input name='slots' autoComplete='off' />
                </FormControl>
                <br />

                <FormControl className={classes.formControl}>
                    <InputLabel>Opening times</InputLabel>
                    <Input name='name' autoComplete='off' />
                </FormControl>
                <br />

                <FormControl className={classes.formControl}>
                    <InputLabel>Closing times</InputLabel>
                    <Input name='name' autoComplete='off' />
                </FormControl>
                <br />

                <FormControl className={classes.formControl}>
                    <InputLabel>Services</InputLabel>
                    <Select
                        multiple
                        value={service}
                        onChange={handleChange}
                        input={<Input id='select-multiple-checkbox' />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {services.map(s => (
                            <MenuItem key={s} value={s}>
                                <Checkbox checked={service.indexOf(s) > -1} />
                                <ListItemText primary={s} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <br />

                <FormControl>
                    <InputLabel>Logo</InputLabel>
                    <Input name='logo' autoComplete='off' />
                </FormControl>
                <br />
            </form>
        </div>
    );
}

export default AddLocation;
