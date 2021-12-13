import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state, action) {
  // eslint-disable-next-line no-param-reassign
  if (!state) state = initialState;
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
