import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Form from 'react-bootstrap/Form';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DropDownMenu from './DropDownMenu.jsx';
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

const userManagmentOptions = ['users', 'profiles', 'groups'];
const businessSetupOptions = [
	'business option1',
	'business option2',
	'business option3',
];
const atmSettingsOptions = ['ATM option1', 'ATM option2', 'ATM option3'];
const allOptions = [
	...userManagmentOptions,
	...atmSettingsOptions,
	...businessSetupOptions,
];

const Sidebar = () => {
	const [query, setQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		let temp = allOptions.filter((option) =>
			option.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
		);

		setSearchResult(temp);
	}, [query]);
	return (
		<section className="p-2 d-flex flex-column gap-3 text-left position-sticky position-md-fixed ">
			<div className="mb-3 align-self-center">
				<img src={logo} alt="logo" />
			</div>
			<div className="mb-3">
				<Form className="d-flex align-items-center position-relative">
					<Form.Control
						type="search"
						placeholder="quick access"
						className="rounded-4 "
						aria-label="Search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<SearchIcon fontSize="large" className="searchIcon" />
				</Form>
			</div>

			{query ? (
				<>
					{searchResult.length === 0 ? (
						<Alert varient="danger">no result with {query}</Alert>
					) : (
						<ListGroup>
							{searchResult.map((el, idx) => (
								<ListGroup.Item
									action
									className="fw-bold hover-success"
									key={idx}
								>
									{el}
								</ListGroup.Item>
							))}
						</ListGroup>
					)}
				</>
			) : (
				<>
					<div className="mb-3 text-muted d-flex align-items-center">
						<DashboardIcon fontSize="large" />
						<span className="ms-4 fw-bold ">Dashboard</span>
					</div>
					<div className="mb-3 text-muted ">SETTINGS</div>
					<DropDownMenu title="ATM Settings" options={atmSettingsOptions} />
					<DropDownMenu title="Business Setup" options={businessSetupOptions} />
					<DropDownMenu
						title="User Management"
						options={userManagmentOptions}
					/>

					<div className="mt-5 text-muted">License Management</div>
				</>
			)}
		</section>
	);
};

export default Sidebar;
