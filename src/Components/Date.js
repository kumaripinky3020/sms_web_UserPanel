import React, { useState } from 'react';

const DateHandle = () => {

    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(null);

    const handleChange = (name) => (event) => {
        setDateError(null);
        setDate({ ...date, [name]: event.target.value });
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            alert("")
            // Selected date is greater than today, set an error
            setDateError("Selected date cannot be greater than today");
        } else {
            // Selected date is valid, update the state and clear the error
            setDateError(null);
            setDate(selectedDate);
        }
    };


    return (
        <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={handleDateChange} />
            {dateError && <p>{dateError}</p>}{console.log(dateError, "dateError")}
        </div>
    );
};

export default DateHandle;