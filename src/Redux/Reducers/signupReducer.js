import initState from '../initState';

var signupReducer = (state=initState, action) => {
  switch(action.type) {
    case 'PW_LEN_ERR':
      return Object.assign({}, state, {
          signupErrs: {
              pwLen: true,
          }
      })
    break;
    case 'USER_LEN_ERR':
      return Object.assign({}, state, {
        signupErrs: {
            userLen: true,
        }
      })
    break;
    case 'PW_MATCH_ERR':
    return Object.assign({}, state, {
      signupErrs: {
          pwMatch: true,
      }
    })
    break;
    case 'RESET_SIGNUP_ERRS':
    return Object.assign({}, state, {
      signupErrs: {
          pwMatch: false,
          pwMatch: false,
          pwMatch: false,
      }
    })
    default:
    return state;
  }
} 

export default signupReducer;