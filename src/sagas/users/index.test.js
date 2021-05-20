import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import 'regenerator-runtime/runtime';
import userSaga from './index';
import * as apis from '../../api/users';
import * as actions from '../../actions/users';

import reducer, { initialState } from '../../reducers/users';

describe('User saga', () => {
	it('get user details', () => {
		return expectSaga(userSaga)
			.provide([[matchers.call.fn(apis.getUsers), { data: [] }]])
			.withReducer(reducer, initialState)
			.hasFinalState({
				...initialState,
			})
			.dispatch(actions.getUsers.request())
			.silentRun();
	});
});
