import React from 'react';
import * as SC from './styles';
import { Column } from '../styles';

const User = ({ name, email, phone, website }) => {
	return (
		<Column xs="12" sm="6" md="4" data-testid="user-details">
			<SC.UserItemContainer>
				<SC.UserItem>{name}</SC.UserItem>
				<SC.UserItem>
					<a href={'mailto:' + email}>{email}</a>
				</SC.UserItem>
				<SC.UserItem>
					<a href={'tel:' + phone}>{phone}</a>
				</SC.UserItem>
				<SC.UserItem>{website}</SC.UserItem>
			</SC.UserItemContainer>
		</Column>
	);
};

export default User;
