import { createSelector } from 'reselect'

const getHome = (state) => state.home;

export const getFormFields = createSelector(
	getHome,
	(home) => home.fields
);


// const mapStateToProps = (state) => ({
// 	formFields: getFormFields(state)
// });
//
// const mapDispatchToProps = (dispatch) => bindActionCreators({
// 	addFormField
// }, dispatch);
//
// export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)