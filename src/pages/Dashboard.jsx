import { DashboardDetails, Navbar, Sidebar } from '../components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Row>
				{isOpen && (
					<Col
						sm={12}
						md={3}
						className="text-bg-primary text-left"
						style={{ minHeight: '98vh' }}
					>
						<Container>
							<Sidebar />
						</Container>
					</Col>
				)}

				<Col md={isOpen ? 9 : 12} className="p-0">
					<Container>
						<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
						<DashboardDetails />
					</Container>
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
