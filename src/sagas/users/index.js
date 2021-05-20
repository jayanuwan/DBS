import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as apis from '../../api/users';
import * as actions from '../../actions/users';

import { GET_USERS } from '../../actions/users';

function* getUsers() {
	try {
		const result = yield call(apis.getUsers);
		yield put(actions.getUsers.success(result.data));
	} catch (error) {
		yield put(actions.getUsers.failure(error));
	}
}

export default function* userSaga() {
	yield takeLatest(GET_USERS, getUsers);
}
