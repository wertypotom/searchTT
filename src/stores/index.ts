import { createContext } from 'react';
import JokesStore from './JokesStore';

export const rootStoreContext = createContext({
  jokesStore: JokesStore,
});
