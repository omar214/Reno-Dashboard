import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Nav from 'react-bootstrap/Nav';
import { default as BootstrapNavbar } from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import moment from 'moment/moment.js';

function Navbar({ isOpen, setIsOpen }) {
	return (
		<BootstrapNavbar
			collapseOnSelect
			expand="md"
			bg="light"
			variant="light"
			sticky="top"
			className="mb-3 w-100 "
		>
			<BootstrapNavbar.Brand className="d-flex align-items-center justify-content-center">
				<Nav.Link>
					<MenuOpenIcon fontSize="large" onClick={() => setIsOpen((s) => !s)} />
				</Nav.Link>
				<span className="mx-3 text-muted d-none d-md-inline">Good Morning</span>
				<span className="text-muted d-none d-md-inline">
					{moment().format('MMMM Do YYYY, h:mm a')}
				</span>
			</BootstrapNavbar.Brand>

			<BootstrapNavbar.Toggle aria-controls="responsive-BootstrapNavbar-nav" />
			<BootstrapNavbar.Collapse id="responsive-BootstrapNavbar-nav">
				<Nav className="ms-auto">
					<Nav.Link>
						<HelpOutlineOutlinedIcon />
					</Nav.Link>
					<Nav.Link className="position-relative">
						<NotificationsIcon />
						<Badge
							pill
							bg="danger"
							className="position-absolute top-0 end-md-0"
						>
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
			</BootstrapNavbar.Collapse>
		</BootstrapNavbar>
	);
}

export default Navbar;
