import initState from '../initState';

var profSettingsReducer = (state = initState, action) => {
  switch(action.type){
    case 'PW_CHANGE_SUCCESS':
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: 'valid',
        delAccReq: state.profileSettings.delAccReq,
      } 
    })
    break;
    case 'PW_CHANGE_FAIL':
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: 'invalid',
        delAccReq: state.profileSettings.delAccReq,
      } 
    })
    break;
    case 'ACC_DEL_FAIL': 
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: state.profileSettings.pwChangeReq,
        delAccReq: 'invalid'
      } 
    })
    break;
    case 'RESET_PROFILE_STATE':
    return Object.assign({}, state, { 
      profileSettings: {
        pwChangeReq: 'none',
        delAccReq: 'none',
      } 
    })
    break;
    default:
    return state;
  }
}

export default profSettingsReducer;