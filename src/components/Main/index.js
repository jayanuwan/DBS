import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/users';
import User from './../User';
import Filter from './../Filter';
import * as SC from './styles';

const selector = ({ user: { userList } }) => ({ userList });

const filter = (data, value, type) => {
	switch (type) {
		case 'text':
			return data.filter((item) =>
				item?.name.toLowerCase().includes(value.toLowerCase())
			);
		case 'number':
			return data.filter((item) =>
				item?.phone.toLowerCase().includes(value.toLowerCase())
			);
	}
};

const Main = () => {
	const dispatch = useDispatch();
	const { userList = [] } = useSelector(selector);

	const [users, setUsers] = useState([]);
	const [FilterUsers, setFilterUsers] = useState([]);

	const getFilterValue = (e) => {
		const filterData = filter(userList, e.target.value, e.target.type);
		setFilterUsers(filterData);
	};

	useEffect(() => {
		setUsers(userList);
	}, [userList]);

	useEffect(() => {
		setUsers(FilterUsers);
	}, [FilterUsers]);

	useEffect(() => {
		dispatch(actions.getUsers.request());
	}, [dispatch]);
	return (
		<SC.Container data-testid="main-details">
			<Filter handleChange={getFilterValue} />
			{/* {(users || []).map((user) => {
				return (
					<User
						key={'user' + user.id}
						name={user?.name}
						email={user?.email}
						phone={user?.phone}
						website={user?.website}
					/>
				);
			})} */}
		</SC.Container>
	);
};

export default Main;
