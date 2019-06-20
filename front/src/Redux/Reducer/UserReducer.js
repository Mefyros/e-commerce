import AuthService from '../../Service/AuthService';
import LoginRegisterService from '../../Service/LoginRegisterService';

const initialState = {
  isLogin: false,
  user: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD":
      return state;

    default:
      return state;
  }
};