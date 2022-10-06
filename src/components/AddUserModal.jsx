import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment/moment.js';

const AddUserModal = ({ handleClose, show, setUsers }) => {
	const formRef = useRef(null);
	const [errorMessage, setErrorMessage] = useState('');

	const handleAddUser = async (e) => {
		e.preventDefault();

		let name = formRef.current.name.value.trim(),
			userName = formRef.current.userName.value.trim(),
			email = formRef.current.email.value.trim(),
			group = formRef.current.group.value,
			profile = formRef.current.profile.value;

		setErrorMessage('');
		console.log(formRef.current.group.value);
		console.log(formRef.current.profile.value);
		if (!name || !userName || !email || !group || !profile)
			return setErrorMessage('Please Enter All Fields');

		setUsers((prev) => ({
			loading: false,
			error: false,
			data: [
				{
					name,
					userName,
					email,
					group,
					status: 'active',
					createdOn: moment(Date.now()).format('DD/MMYYYY'),
					avatar:
						'https://robohash.org/beataeearumdebitis.png?size=50x50&set=set1',
				},
				...prev.data,
			],
		}));

		handleClose();
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
								placeholder="Enter userName"
								type="text"
								name="userName"
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
							<Form.Select required name="group">
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
								<option value="profile 1">profile 1</option>
								<option value="Profile 2">Profile 2</option>
								<option value="Profile 3">Profile 3</option>
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
