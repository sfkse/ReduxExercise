import { createStore, combineReducers } from 'redux';
import { laptopReducer } from './reducers/laptopReducer';
import { phoneReducer } from './reducers/phoneReducer';
import { watchReducer } from './reducers/watchReducer';

const rootReducer = combineReducers({
    laptop: laptopReducer,
    phone: phoneReducer,
    watch: watchReducer
})

const store = createStore(rootReducer);

export default store;
