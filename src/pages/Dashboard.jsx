import { DashboardDetails, Navbar, Sidebar } from '../components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<Container fluid>
			<Row>
				{isOpen && (
					<Col
						sm={12}
						md={2}
						className="text-bg-primary text-left"
						style={{ minHeight: '100vh', minWidt: '20vh' }}
					>
						<Container>
							<Sidebar />
						</Container>
					</Col>
				)}

				<Col md={isOpen ? 10 : 12} sm={12} className="p-0">
					<Container>
						<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
						<DashboardDetails />
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
