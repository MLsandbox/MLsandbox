const initialState = {
  loginPopup: false,
  authentication: { 
    authorization: false,
    processing: false,
    error: false,
    user: {},
  },
  signupErrs: {
    pwLen: false,
    usrLen: false,
    pwMatch: false
  },
  profileSettings: {
    pwChangeReq: 'none',
    delAccReq: 'none',
  }
}

export default initialState;