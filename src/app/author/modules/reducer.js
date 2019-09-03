import { handleActions } from 'redux-actions'
import {
	SET_YEAR,
	ADD_YEAR
} from './actionTypes'

const initialState = {
	user: "unknown user 777",
	year: 2017
}

const authorReducer = handleActions({
	[SET_YEAR]: (state, { payload }) => {
		const { fields } = payload;
		return {
			...state,
			fields
		}
	},
	[ADD_YEAR]: (state, payload) => {
		const user = payload;
		return {
			...state,
			user
		}
	},
	// [DATA_FETCH_ERROR]: (state, { payload }) => {
	// 	const { err: dataFetchError } = payload;
	// 	return {
	// 		...state,
	// 		dataFetchError
	// 	}
	// }
}, initialState);

export default authorReducer

// export default function authorReducer(state = initialState) {
// 	switch() {
// 		case '': return 'bar';
// 		case '': return 'foo';
// 		default: return state
// 	}
// 	return state
// }