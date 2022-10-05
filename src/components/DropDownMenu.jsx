import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const DropDownMenu = ({ title, options }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<Dropdown className={`text-center d-flex flex-column `}>
				<Dropdown.Toggle
					className={isMenuOpen ? 'text-bg-success' : 'text-muted'}
					onClick={() => setIsMenuOpen((s) => !s)}
				>
					{title}
				</Dropdown.Toggle>
				{isMenuOpen && (
					<ListGroup>
						{options.map((el) => (
							<ListGroup.Item>{el}</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Dropdown>
		</>
	);
};

export default DropDownMenu;
