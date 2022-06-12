import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "./authentication/authReduser";
import { todoReducer } from "./todo/todoReducer";
const rootReducers=combineReducers({
    auth:authReducer,
    todo:todoReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));

