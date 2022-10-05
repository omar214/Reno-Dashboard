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
			<div className="mb-3 text-muted d-flex align-items-center">
				<DashboardIcon fontSize="large" />
				<span className="ms-4 fw-bold ">Dashboard</span>
			</div>
			<div className="mb-3 text-muted ">SETTINGS</div>
			<DropDownMenu
				title="ATM Settings"
				options={['option1', 'option2', 'option 3']}
			/>
			<DropDownMenu
				title="Business Setup"
				options={['option1', 'option2', 'option 3']}
			/>
			<DropDownMenu
				title="User Management"
				options={['option1', 'option2', 'option 3']}
			/>

			<div className="mt-5 text-muted">License Management</div>
		</section>
	);
};

export default Sidebar;
