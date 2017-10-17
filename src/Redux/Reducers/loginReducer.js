const initialState = {
  loginPopup: false,
}

function loginReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_POPUP_STATE':
      return Object.assign({}, state, { loginPopup: !state.loginPopup });
    default:
      return state;
  }
}

export default loginReducer;