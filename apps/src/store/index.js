import createStoreFromServer from './serverStore';
import createStoreFromClient from './clientStore';

const defaultInitialState = {};

export default (initialState = defaultInitialState, { isServer }) => {
  if (isServer) {
    return createStoreFromServer(initialState);
  }

  return createStoreFromClient(initialState);
};
