import { combineReducers } from 'redux'
import homeReducer from '../app/home/modules/reducer'
import authorReducer from '../app/author/modules/reducer'

const rootReducer = combineReducers({
	home: homeReducer,
	author: authorReducer
});

export default rootReducer