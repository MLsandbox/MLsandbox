import initState from '../initState';

var signupReducer = (state = initState, action) => {
  switch (action.type) {
  case 'PW_LEN_ERR':
    return Object.assign({}, state, {
      signupErrs: {
        pwLen: true,
        pwMatch: state.signupErrs.pwMatch,
        usrLen: state.signupErrs.usrLen,
      }
    });
    break;
  case 'USER_LEN_ERR':
    return Object.assign({}, state, {
      signupErrs: {
        usrLen: true,
        pwLen: state.signupErrs.pwLen,
        pwMatch: state.signupErrs.pwMatch,
      }
    });
    break;
  case 'PW_MATCH_ERR':
    return Object.assign({}, state, {
      signupErrs: {
        pwMatch: true,
        usrLen: state.signupErrs.usrLen,
        pwLen: state.signupErrs.pwLen,
      }
    });
    break;
  case 'RESET_SIGNUP_ERRS':
    return Object.assign({}, state, {
      signupErrs: {
        pwMatch: false,
        usrLen: false,
        pwLen: false,
      }
    });
  default:
    return state;
  }
};

export default signupReducer;