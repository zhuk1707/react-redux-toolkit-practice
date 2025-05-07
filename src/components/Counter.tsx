import styles from "./Counter.module.css"
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "../features/counter/counterSlice.ts";

export const Counter = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className={styles.counterWrapper}>

      <div className={styles.counter}>
        <div className={styles.counterValue}>{count}</div>
        <div className={styles.counterControls}>
          <div className={styles.counterControlWrapper}>
            <button
              className={styles.button}
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className={styles.button}
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>

          <div className={styles.counterControlWrapper}>
            <button
              className={styles.button}
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>

          <div className={styles.counterControlWrapper}>
            <input
              type="number"
              value={incrementAmount}
              onChange={(event) => setIncrementAmount(event.target.value)}
            />
          </div>

          <div className={styles.counterControlWrapper}>
            <button
              className={styles.button}
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
            >
              Add Amount
            </button>

            <button
              className={styles.asyncButton}
              onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
            >
              Add Async
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};