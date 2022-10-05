import ReactDatePicker from 'react-datepicker';

const DatePicker = ({ setDateRange, startDate, endDate, dateRange }) => {
	[startDate, endDate] = dateRange;
	return (
		<div>
			<ReactDatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={(update) => {
					setDateRange(update);
					console.log([startDate, endDate]);
				}}
				className="p-1 rounded-2 border-1"
				placeholderText="Select Date"
				withPortal
			/>
		</div>
	);
};

export default DatePicker;
