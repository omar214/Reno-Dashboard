import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BlockIcon from '@mui/icons-material/Block';
import AddUserModal from './AddUserModal.jsx';
import { useEffect, useRef, useState } from 'react';
import DatePicker from './DatePicker.jsx';
import UsersTable from './UsersTable.jsx';

const DashboardDetails = () => {
	const [isAddNew, setIsAddNew] = useState(false);

	// filters state
	const [filters, setFilters] = useState({});
	const [checkBoxFilters, setCheckBoxFilter] = useState([]);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const formRef = useRef(null);

	const handleClose = () => setIsAddNew(false);
	const handleCheckBoxFilters = (e) => {
		let { checked: value, name } = e.target;

		if (value) {
			setCheckBoxFilter((prev) => [...prev, name.toLowerCase()]);
		} else {
			setCheckBoxFilter((prev) =>
				prev.filter((el) => el !== name.toLowerCase()),
			);
		}
	};
	const handleFilters = (e) => {
		let value = e.target.value;
		setFilters((prev) => ({
			...prev,
			[e.target.name]: value,
		}));

		if (value === '' && filters.hasOwnProperty(e.target.name)) {
			let temp = filters;
			delete temp[`${e.target.name}`];
			setFilters(temp);
		}
	};
	const handleReset = () => {
		formRef.current.reset();
		setFilters({});
		setCheckBoxFilter([]);
		setStartDate(null);
		setEndDate(null);
	};

	return (
		<>
			<div className="d-flex justify-content-between mb-3">
				<h3>User Management</h3>
				<Button variant="success" onClick={(e) => setIsAddNew(true)}>
					Add New
				</Button>
			</div>
			{isAddNew && <AddUserModal show={isAddNew} handleClose={handleClose} />}

			<div className="border">
				<Form
					ref={formRef}
					className="d-flex flex-column flex-md-row align-items-center gap-2 w-75 p-4"
				>
					<Form.Control
						type="text"
						placeholder="Search "
						className="ps-4 w-50"
						aria-label="Search"
						name="search"
						value={filters.search ? filters.search : ''}
						onChange={handleFilters}
					/>
					<SearchIcon className="position-absolute left-20 " />
					<Form.Control
						type="text"
						placeholder="user name"
						className="w-25"
						aria-label="Search"
						value={filters.userName ? filters.userName : ''}
						name="userName"
						onChange={handleFilters}
					/>
					<Dropdown autoClose="outside" variant="light">
						<Dropdown.Toggle variant="outline-secondary">
							User Status
						</Dropdown.Toggle>
						<Dropdown.Menu className="p-3">
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Form.Check
										type="checkbox"
										label="Locked"
										name="locked"
										onChange={handleCheckBoxFilters}
									/>
								</ListGroup.Item>
								<ListGroup.Item>
									<Form.Check
										type="checkbox"
										label="Active"
										name="active"
										onChange={handleCheckBoxFilters}
									/>
								</ListGroup.Item>
								<ListGroup.Item>
									<Form.Check
										type="checkbox"
										label="Inactive"
										name="inactive"
										onChange={handleCheckBoxFilters}
									/>
								</ListGroup.Item>
							</ListGroup>
						</Dropdown.Menu>
					</Dropdown>

					<DatePicker
						setStartDate={setStartDate}
						setEndDate={setEndDate}
						startDate={startDate}
						endDate={endDate}
					/>
					<div className="vr" />
					<span className="cursor-pointer" onClick={handleReset}>
						Clear All Filters
					</span>
				</Form>

				<div className=" p-4">
					<Stack gap={4} direction="horizontal">
						5 selected
						<div className="vr" />
						<Button variant="secondary" size="sm">
							<EditIcon />
						</Button>
						<Button variant="secondary" size="sm">
							<BlockIcon />
						</Button>
						<Button variant="secondary" size="sm">
							<LockOutlinedIcon />
						</Button>
						<Button variant="secondary">Assign to Profile </Button>
						<Button variant="secondary">Assign to Group </Button>
						<Button variant="secondary" size="sm">
							<MoreVertOutlinedIcon />
						</Button>
						<span className="cursor-pointer">Unselect all</span>
						<Button className="ms-auto" variant="secondary">
							<DownloadIcon />
						</Button>
					</Stack>
				</div>

				<UsersTable
					startDate={startDate}
					endDate={endDate}
					filters={filters}
					checkBoxFilters={checkBoxFilters}
				/>
			</div>
		</>
	);
};

export default DashboardDetails;
