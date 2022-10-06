import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const DropDownMenu = ({ title, options }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<Dropdown className={`d-flex flex-column fw-bold`}>
				<div
					className={`p-3 d-flex justify-content-between rounded-3 cursor-pointer ${
						isMenuOpen ? 'text-bg-success' : 'text-muted'
					}`}
					onClick={() => setIsMenuOpen((s) => !s)}
				>
					{title}
					{isMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				</div>
				{isMenuOpen && (
					<ListGroup>
						{options.map((el, idx) => (
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
			</Dropdown>
		</>
	);
};

export default DropDownMenu;
