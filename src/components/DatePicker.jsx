import ReactDatePicker from 'react-datepicker';

const DatePicker = ({ setStartDate, setEndDate, startDate, endDate }) => {
	return (
		<div>
			<ReactDatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={(update) => {
					setStartDate(update[0]);
					setEndDate(update[1]);
				}}
				className="p-1 rounded-2 border-1 datePicker"
				placeholderText="Select Date"
				withPortal
			/>
		</div>
	);
};

export default DatePicker;
