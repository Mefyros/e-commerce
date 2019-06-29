// import AuthService from '../../Service/AuthService';
// import LoginRegisterService from '../../Service/LoginRegisterService';

const initialState = {
  isLogin: false,
  userData: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "LOG_USER":
      return {
        isLogin: true,
        userData: action.payload,
      };

    default:
      return state;
  }
};