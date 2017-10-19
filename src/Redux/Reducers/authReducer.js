import initState from '../initState';

function auth (state = initState, action) {
  switch (action.type) {
    case 'REQ_AUTH':
      console.log('signing in please wait');
      return Object.assign({}, state, {authenticating: true});
    break;
    case 'VALIDATE_AUTH':
      console.log('access aquired');
      return Object.assign({}, state, 
        { 
          authenticating: false,
          authentication: true,
        })
    break;
    case 'REQ_AUTH_FAIL':
      console.log('opps something went wrong');
    return Object.assign({}, state, 
      { 
        authenticating: false,
        authentication: 'error',
      })
    break;
    default:
    console.log(state);
    return state;
  }
}

export default auth;