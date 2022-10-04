import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import moment from 'moment/moment.js';

function MyNavbar({ isOpen, setIsOpen }) {
	return (
		<Navbar
			collapseOnSelect
			expand="md"
			bg="light"
			variant="light"
			sticky="top"
			className="mb-3 w-100 "
		>
			<Navbar.Brand className="text-primary d-flex align-items-center">
				<Nav.Link>
					<MenuOpenIcon fontSize="large" onClick={() => setIsOpen((s) => !s)} />
				</Nav.Link>
				<span className="mx-3 text-muted">Good Morning</span>
				<span className="text-muted">
					{moment().format('MMMM Do YYYY, h:mm a')}
				</span>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link>
						<HelpOutlineOutlinedIcon />
					</Nav.Link>
					<Nav.Link className="position-relative">
						<NotificationsIcon />
						<Badge pill bg="danger" className="position-absolute top-0 end-0">
							5
						</Badge>
					</Nav.Link>
					<NavDropdown title={'User Name'} id="Admin-nav-dropdown">
						<NavDropdown.Item>Option 1</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item>Option 2</NavDropdown.Item>
						<NavDropdown.Item>Option 3</NavDropdown.Item>
						<NavDropdown.Item>Option 4</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default MyNavbar;
