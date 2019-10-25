import React from 'react';
import DatePickerClass from '../others/DatePickerClass';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

class BookPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='title text-center'>
                    <h1>Testing page</h1>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePickerClass />
                    </MuiPickersUtilsProvider>
                </div>
            </div>
        );
    }
}

export default BookPage;
