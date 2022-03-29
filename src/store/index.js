import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// before toolkit, reducer
// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, counter: state.counter + 1 };
//     case 'decrement':
//       return { ...state, counter: state.counter - 1 };
//     case 'increase':
//       return { ...state, counter: state.counter + action.amount };
//     case 'toggle':
//       return { ...state, show: !state.show };
//     default:
//       return initState;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
