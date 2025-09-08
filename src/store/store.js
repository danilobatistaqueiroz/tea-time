import { configureStore, combineReducers } from '@reduxjs/toolkit'
import itemReducer from './item-slice'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root', // Key for your persisted state in local storage
  storage, // The storage engine to use (localStorage in this case)
  // whitelist: ['someSlice'], // Optional: only persist specific parts of your state
  //blacklist: ['edition','editionSlice','edition-slice'], // Optional: don't persist specific parts
};

const allReducers = combineReducers({
  items: itemReducer
});

const persistedReducers = persistReducer(persistConfig, allReducers);


const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store);

export { store, persistor };