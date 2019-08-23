import { createActions } from 'redux-actions'
import { SET_YEAR } from './actionTypes'

const actions = createActions(
	SET_YEAR
)

export default function setYear(year) {
	return actions.setYear({year})
}