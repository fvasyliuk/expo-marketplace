import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import { persistStore, persistCombineReducers, persistReducer } from 'redux-persist';
import AsyncStorage from 'redux-persist/es/storage';


const config = {
    key: 'root',
    whitelist: [
        'viewer',
        'persist',
    ],
    storage: AsyncStorage,
};

const reducer = persistReducer(config, rootReducer);

const enhancer = compose(
    applyMiddleware(thunk),
);

const store = createStore(
    reducer,
    undefined,
    enhancer,
);

export let persist = null;

export const createPersist = () =>
    new Promise((res) => {
        persist = persistStore(store, {}, res);
    });

export default store;