import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.show);
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // action:{type: uniqueID, payload: 5}
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  // before redux toolkit
  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' });
  // };

  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 5 });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' });
  // };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
