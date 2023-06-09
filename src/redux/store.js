import{configureStore,  combineReducers} from "@reduxjs/toolkit";
import userReducer from "./userRedux"; 
/*import produtoReducer from "./produtoRedux"; 
import userGetReducer from "./userGetRedux"; 
import lojaReducer from "./lojaRedux"; */
import currentLojaReducer from "./lojaLoginRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  const persistConfig = {
    key: 'vandja',
    version: 1,
    storage,
  }
  
  const rootReducer = combineReducers({user:userReducer, lojaLogin:currentLojaReducer})

  const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const  persistor = persistStore(store)
