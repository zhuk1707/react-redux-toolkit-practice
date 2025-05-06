import styles from "./Counter.module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {decrement, divisionByTwo, increment, incrementByAmount} from "../features/counter/counterSlice.ts";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className={styles.counterWrapper}>

      <div className={styles.counter}>
        <div className={styles.counterValue}>{count}</div>
        <div className={styles.counterControls}>
          <div className={styles.counterControlWrapper}>
            <button
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>
          <div className={styles.counterControlWrapper}>
            <button
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
          <div className={styles.counterControlWrapper}>
            <button
              onClick={() => dispatch(divisionByTwo())}
            >
              Division by 2
            </button>
          </div>
          <div className={styles.counterControlWrapper}>
            <input
              type="number"
              value={incrementAmount}
              onChange={(event) => setIncrementAmount(event.target.value)}
            />
            <button
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
            >
              Add Amount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};