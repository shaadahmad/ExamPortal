import { combineReducers } from "redux";
import userReducer from './User/userReducer'
import newReducer from './Register/R_Reducer'

const rootReducer = combineReducers({
    user: userReducer,
    auth: newReducer
})

export default rootReducer