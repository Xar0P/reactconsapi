import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
  registeredAnAccount: false,
  loginAgain: false,
};

export default function reducer(state, action) {
  // eslint-disable-next-line no-param-reassign
  if (!state) state = initialState;
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      newState.loginAgain = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      newState.loginAgain = true;
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      newState.registeredAnAccount = true;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      newState.registeredAnAccount = false;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.RESET_REGISTER: {
      const newState = { ...state };
      newState.registeredAnAccount = false;
      return newState;
    }

    case types.RESET_LOGIN_AGAIN: {
      const newState = { ...state };
      newState.loginAgain = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
