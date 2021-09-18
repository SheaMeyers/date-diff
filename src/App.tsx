import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import Moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


function App() {

  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate' | null>(null);

  const [startDate, setStartDate] = useState<Moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment.Moment | null>(null);

  const handleDatesChanged = (startDate: Moment.Moment | null, endDate: Moment.Moment | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  return (
    <div className="App">
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => handleDatesChanged(startDate, endDate)} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
      />
    </div>
  );
}

export default App;
