import initState from '../initState';

function loginReducer (state = initState, action) {
  switch (action.type) {
    case 'SET_ERROR_STATE':
      return Object.assign({}, state, { loginPopup: !state.loginPopup });
    default:
      return state;
  }
}

export default loginReducer;