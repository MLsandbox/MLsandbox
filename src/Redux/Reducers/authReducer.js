import initState from '../initState';

function auth (state = initState, action) {
  switch (action.type) {
    case 'REQ_AUTH':
      console.log('signing in please wait');
      return Object.assign({}, state, {authenticating: true});
    break;
    case 'VALIDATE_AUTH':
      console.log('access aquired', action.user);
      return Object.assign({}, state, 
        { 
          authentication: { 
            authorization: true,
            authenticating: false,
            error: false,
            user: action.user,
          }
        })
    break;
    case 'INVALID_AUTH':
      console.log('invalid credentials');
      return Object.assign({}, state, 
        { 
          authentication: { 
            authorization: false,
            authenticating: false,
            error: false
          }
        })
    break;
    case 'LOGOUT':
      console.log('you have successfully logged out');
      return Object.assign({}, state,
        {
          authentication: { 
            authorization: false,
            authenticating: false,
            user: {},
            error: false
          }
        }
      )
    case 'REQ_AUTH_FAIL':
      console.log('opps something went wrong');
    return Object.assign({}, state, 
      { 
        authentication: { 
          authorization: false,
          authenticating: false,
          error: false,
        }
      })
    break;
    default:
    return state;
  }
}

export default auth;