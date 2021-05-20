import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import User from './index';

const data = {
	name: '',
	phone: '',
	email: '',
	web: '',
};
/**
 * @jest-environment jsdom
 */
describe('user details', () => {
	it('renders user Details', () => {
		const { getByTestId } = render(
			<User
				name={data.name}
				email={data.email}
				phone={data.phone}
				website={data.web}
			/>
		);

		expect(getByTestId('user-details')).toMatchSnapshot();
	});
});
