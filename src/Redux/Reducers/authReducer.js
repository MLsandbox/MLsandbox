import initState from '../initState';

function auth (state = initState, action) {
  switch (action.type) {
    case 'REQ_AUTH':
      return Object.assign({}, state, {
        authentication: { 
          authorization: state.authentication.authorization,
          processing: true,
          error: state.authentication.error,
          user: state.authentication.user,
        }
      });
    break;
    case 'VALIDATE_AUTH':
      return Object.assign({}, state, 
        { 
          authentication: { 
            authorization: true,
            processing: false,
            error: false,
            user: action.user,
          }
        })
    break;
    case 'INVALID_AUTH':
      return Object.assign({}, state, 
        { 
          authentication: { 
            authorization: false,
            processing: false,
            error: 'Invalid Credentials',
            user: state.authentication.user,
          }
        })
    break;
    case 'INVALID_SIGNUP':
      return Object.assign({}, state, 
        { 
          authentication: { 
            authorization: false,
            processing: false,
            error: action.data,
            user: state.authentication.user,
          }
        })
    break;
    case 'LOGOUT':
      return Object.assign({}, state,
        {
          authentication: { 
            authorization: false,
            processing: false,
            user: {},
            error: false
          }
        }
      )
    case 'REQ_AUTH_FAIL':
    return Object.assign({}, state, 
      { 
        authentication: { 
          authorization: false,
          processing: false,
          error: 'internal error',
          user: state.authentication.user,
        }
      })
    break;
    case 'RESET_ERROR':
    return Object.assign({}, state, 
      { 
        authentication: { 
          authorization: state.authentication.authorization,
          processing:  state.authentication.processing,
          error: false,
          user: state.authentication.user,
        }
      })
    break;
    default:
    return state;
  }
}

export default auth;