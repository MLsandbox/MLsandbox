import initState from '../initState';

var signupReducer = (state=initState, action) => {
    switch(action.type) {
        case 'PW_LEN_ERR':
        break;
        case 'USER_LEN_ERR':
        break;
        case 'PW_MATCH_ERR':
        break;
        default:
        return state;
    }
} 

export default signupReducer;