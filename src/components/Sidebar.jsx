import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DropDownMenu from './DropDownMenu.jsx';

const Sidebar = () => {
	return (
		<section sticky="left" className="p-2 d-flex flex-column gap-3 text-left">
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
					/>
					<SearchIcon fontSize="large" className="searchIcon" />
				</Form>
			</div>
			<div className="mb-3 text-muted">
				<DashboardIcon />
				Dashboard
			</div>
			<div className="mb-3 text-muted ">Settings</div>
			<Dropdown>
				<Dropdown.Toggle className="text-muted">ATM Settings</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item>Action</Dropdown.Item>
					<Dropdown.Item>Another action</Dropdown.Item>
					<Dropdown.Item>Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown>
				<Dropdown.Toggle className="text-muted">Business Setup</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item>Action</Dropdown.Item>
					<Dropdown.Item>Another action</Dropdown.Item>
					<Dropdown.Item>Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<DropDownMenu title="User Management" options={['option1', 'option2']} />
			{/* <Dropdown>
				<Dropdown.Toggle className="text-muted">
					User Management
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item>Users </Dropdown.Item>
					<Dropdown.Item>Profiles</Dropdown.Item>
					<Dropdown.Item>Groups</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */}
			<div className="mt-5 text-muted">License Management</div>
		</section>
	);
};

export default Sidebar;
