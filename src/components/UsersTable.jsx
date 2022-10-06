import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import API from '../api/api.js';
import moment from 'moment';

const UsersTable = (props) => {
	const { startDate, endDate, filters, checkBoxFilters, users, setUsers } =
		props;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setUsers({ loading: true, error: false, data: [] });
				const { data: res } = await API.get('/users');
				setUsers({ loading: false, error: false, data: res.users });
			} catch (error) {
				setUsers((prev) => ({ ...prev, loading: false, error: true }));
				console.log(error.message);
			}
		};
		fetchData();
	}, [setUsers]);

	const filterData = (data) => {
		if (
			(!filters.hasOwnProperty('search') || filters.search === '') &&
			(!filters.hasOwnProperty('userName') || filters.userName === '') &&
			(!checkBoxFilters || checkBoxFilters.length === 0) &&
			(!startDate || !endDate)
		)
			return data;
		let temp = [];
		if (filters.hasOwnProperty('userName') && filters.userName)
			temp = [
				...temp,
				...data.filter((el) =>
					el.userName.toLowerCase().includes(filters.userName.toLowerCase()),
				),
			];

		if (filters.hasOwnProperty('search') && filters.search)
			temp = [
				...temp,
				...data.filter(
					(el) =>
						el.email.toLowerCase().includes(filters.search.toLowerCase()) ||
						el.userName.toLowerCase().includes(filters.search.toLowerCase()) ||
						el.group.toLowerCase().includes(filters.search.toLowerCase()) ||
						el.status.toLowerCase().includes(filters.search.toLowerCase()),
				),
			];

		if (checkBoxFilters && checkBoxFilters.length > 0) {
			console.log(data[0].status);
			temp = [
				...temp,
				...data.filter((el) =>
					checkBoxFilters.includes(el.status.toLowerCase()),
				),
			];
			console.log('after check box', temp);
		}

		if (startDate && endDate)
			temp = [
				...temp,
				...data.filter((el) =>
					moment(el.createdOn).isBetween(moment(startDate), moment(endDate)),
				),
			];

		console.log(temp);
		return temp;
	};
	return (
		<>
			{users.loading ? (
				<Spinner animation="grow" variant="dark" />
			) : users.error ? (
				<Alert variant="danger"> Error while loading data </Alert>
			) : (
				<Table bordered hover responsive className="mb-0">
					<thead>
						<tr>
							<th className="text-center">
								<Form.Check type="checkbox" varient="success" />
							</th>
							<th>User Name</th>
							<th>Email</th>
							<th>Group</th>
							<th>Status</th>
							<th>Created On</th>
						</tr>
					</thead>
					<tbody>
						{users.data &&
							filterData(users.data).map((user, idx) => (
								<tr key={idx}>
									<td className="text-center">
										<Form.Check type="checkbox" />
									</td>
									<td className="d-flex align-items-center">
										<img src={user.avatar} alt="avatar" />
										<span className="ms-2"> {user.userName}</span>
									</td>
									<td>{user.email}</td>
									<td>{user.group}</td>
									<td>{user.status}</td>
									<td>{user.createdOn}</td>
								</tr>
							))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default UsersTable;
