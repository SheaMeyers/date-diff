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
        startDate={startDate}
        startDateId="start_date_id"
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={({ startDate, endDate }) => handleDatesChanged(startDate, endDate)}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        isOutsideRange={() => false}
      />
    </div>
  );
}

export default App;
