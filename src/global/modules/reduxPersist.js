import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-DA-APLICACAO',
      storage,
      // Aqui coloca quem quer salvar
      whitelist: ['exampleReducer'],
    },
    reducers
  );

  return persistedReducers;
};
