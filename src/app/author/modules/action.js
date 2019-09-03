import { createActions } from 'redux-actions'
import { SET_YEAR, ADD_YEAR } from './actionTypes'

const actions = createActions(
	SET_YEAR,
	ADD_YEAR
)

export function setYear(year) {
	return actions.setYear({year})
}

export function addYear(year) {
	return actions.addYear(year)
}