import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const DropDownMenu = ({ title, options, isCheckBox }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	isCheckBox = isCheckBox || true;

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
							<ListGroup.Item className="hover-overlay">
								{isCheckBox ? (
									<Form.Check type="checkbox" label="asd" />
								) : (
									{ el }
								)}
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Dropdown>
		</>
	);
};

export default DropDownMenu;
