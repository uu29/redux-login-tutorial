import { combineReducers } from "redux"; // 여러 리듀서를 하나로 합쳐주는
import user from './user_reducer'

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
