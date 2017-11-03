import initState from '../initState';

var profSettingsReducer = (state = initState, action) => {
  switch(action.type){
    case 'PW_CHANGE_SUCCESS':
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: 'valid',
      } 
    })
    break;
    case 'PW_CHANGE_FAIL':
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: 'invalid',
      } 
    })
    break;
    case 'RESET_PROFILE_STATE':
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: 'none',
      } 
    })
    break;
    default:
    return state;
  }
}

export default profSettingsReducer;