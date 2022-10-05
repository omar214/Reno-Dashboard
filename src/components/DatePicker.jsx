import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ReactDatePicker from 'react-datepicker';

const DatePicker = () => {
	const [dateRange, setDateRange] = useState([null, null]);
	const [startDate, endDate] = dateRange;
	return (
		<ReactDatePicker
			className="me-0 w-50"
			selectsRange={true}
			startDate={startDate}
			endDate={endDate}
			onChange={(update) => {
				setDateRange(update);
			}}
			placeholderText="Date"
		/>
	);
};

export default DatePicker;
