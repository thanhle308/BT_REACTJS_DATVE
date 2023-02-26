import { combineReducers, createStore } from 'redux';
import { datVePhimReducer } from './reducers/DatVePhimReducer';

//? store sẽ cung cấp cho component các reducer( là 1 hàm chứa state, bao gồm cả setState)
//? rootReducer : reduce tổng chứa nhiều reducer

const rootReducer = combineReducers({
   //Các state cần lưu trữ trên store
   datVePhimReducer,
});

export const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
