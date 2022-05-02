import { createStore } from 'redux';
import annotationsReducer from './reducer';

const store = createStore(annotationsReducer);

export default store;
