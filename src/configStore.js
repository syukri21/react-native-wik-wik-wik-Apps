import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/rootReducers';

// const persistConfig = {
// 	key     : 'root',
// 	storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(rootReducer, applyMiddleware(thunk));
// let persistor = persistStore(store);

// export { store, persistor };

export { store };
