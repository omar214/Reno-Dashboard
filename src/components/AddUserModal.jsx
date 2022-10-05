import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
// import API from '../api/api.js';
// import { toast } from 'react-toastify';

const AddUserModal = ({ handleClose, show, addUser }) => {
	const formRef = useRef(null);
	const [errorMessage, setErrorMessage] = useState('');

	const handleAddUser = async (e) => {
		e.preventDefault();

		let name = formRef.current.name.value.trim(),
			username = formRef.current.username.value.trim(),
			email = formRef.current.email.value.trim(),
			userGroup = formRef.current.userGroup,
			profile = formRef.current.profile.value.trim();

		setErrorMessage('');
		console.log(formRef.current.userGroup.value);
		if (
			!name ||
			!username ||
			!email
			// ||!userGroup || !profile
		)
			return setErrorMessage('Please Enter All Fields');
	};
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header
					closeButton
					closeVariant="white"
					className="text-bg-primary"
				>
					<Modal.Title>Add New User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleAddUser} ref={formRef}>
						<Form.Group className="mb-3">
							<Form.Label className="fw-bold"> Full Name</Form.Label>
							<Form.Control
								required
								placeholder="Enter Full Name"
								type="text"
								name="name"
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label className="fw-bold"> User Name</Form.Label>
							<Form.Control
								required
								placeholder="Enter username"
								type="text"
								name="username"
								variant="success"
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label className="fw-bold"> Email</Form.Label>
							<Form.Control
								required
								placeholder="Enter Email Address"
								type="email"
								name="email"
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label className="fw-bold"> User Group</Form.Label>
							<Form.Select required name="userGroup">
								<option disabled>choose user group</option>
								<option value="Office">Office</option>
								<option value="Managers">Managers</option>
								<option value="HeadOffice">Head Office</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label className="fw-bold"> Assign Profile</Form.Label>
							<Form.Select required name="profile">
								<option disabled>choose user profile</option>
								<option value="Office">profile 1</option>
								<option value="Managers">Profile 2</option>
								<option value="HeadOffice">Profile 3</option>
							</Form.Select>
						</Form.Group>

						{errorMessage && (
							<Alert
								variant="danger"
								dismissible
								onClose={() => setErrorMessage('')}
							>
								{errorMessage}
							</Alert>
						)}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="outline-secondary"
						className="me-auto"
						onClick={(e) => {
							formRef.current.reset();
							setErrorMessage('');
						}}
					>
						Reset feilds
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="success" onClick={handleAddUser}>
						Add User
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AddUserModal;
