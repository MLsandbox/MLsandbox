import initState from '../initState';

function loginReducer (state = initState, action) {
  switch (action.type) {
    case 'SET_POPUP_STATE':
      return Object.assign({}, state, { loginPopup: !state.loginPopup });
    default:
      console.log(state);
      return state;
  }
}

export default loginReducer;