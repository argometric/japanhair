import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 200,
        maxWidth: 300,
    },
    button: {
        backgroundColor: '#2E2E2E',
        minWidth: 200,
        maxWidth: 300,
        marginTop: 35,
        '&:hover': {
            backgroundColor: '#212121',
        },
    },
}));

function ShopForm(props) {
    const classes = useStyles();
    const [service, setService] = useState([]);

    const services = ['cutting', 'cutting and washing', 'hair dyeing'];

    const handleChange = event => {
        setService(event.target.value);
    };

    return (
        <>
            <div className='title text-center'>
                <h1>Add shop</h1>
            </div>
            <form onSubmit={props.onSubmit}>
                <div className='row text-center'>
                    <div className='col'>
                        <FormControl className={classes.formControl}>
                            <InputLabel>Id</InputLabel>
                            <Input
                                name='id'
                                value={props.shop.id}
                                onChange={props.onChange}
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel>Name</InputLabel>
                            <Input
                                name='name'
                                value={props.shop.name}
                                onChange={props.onChange}
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel>City</InputLabel>
                            <Input
                                name='city'
                                value={props.shop.city}
                                onChange={props.onChange}
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel>Opening times</InputLabel>
                            <Input
                                name='openingTimes'
                                value={props.shop.openingTimes}
                                onChange={props.onChange}
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel>Closing times</InputLabel>
                            <Input
                                name='closingTimes'
                                value={props.shop.closingTimes}
                                onChange={props.onChange}
                                autoComplete='off'
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel>Slots</InputLabel>
                            <Input
                                name='slots'
                                value={props.shop.slots}
                                onChange={props.onChange}
                            />
                        </FormControl>
                        <br />
                        <FormControl className={classes.formControl}>
                            <InputLabel>Services</InputLabel>
                            <Select
                                multiple
                                value={service}
                                name='service'
                                onChange={handleChange}
                                input={<Input id='select-multiple-checkbox' />}
                                renderValue={selected => selected.join(', ')}
                            >
                                {services.map(s => (
                                    <MenuItem key={s} value={s}>
                                        <Checkbox
                                            checked={service.indexOf(s) > -1}
                                        />
                                        <ListItemText primary={s} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br />
                        <FormControl>
                            <InputLabel>Logo</InputLabel>
                            <Input
                                name='imgUrl'
                                value={props.shop.imgUrl}
                                onChange={props.onChange}
                            />
                        </FormControl>
                        <br />
                        <Button
                            variant='outlined'
                            site='large'
                            type='submit'
                            value='Save'
                            id='orangeBtn'
                            className={classes.button}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default ShopForm;
