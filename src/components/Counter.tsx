import styles from "./Counter.module.css"

export const Counter = () => {
  return (
    <div className={styles.counterWrapper}>

      <div className={styles.counter}>
        <div className={styles.counterValue}>0{}</div>
        <div className={styles.counterControls}>
          <div className={styles.counterControlWrapper}>
            <button>Increment</button>
          </div>
          <div className={styles.counterControlWrapper}>
            <button>Decrement</button>
          </div>
          <div className={styles.counterControlWrapper}>
            <input type="number"/>
            <button>Add it</button>
          </div>
        </div>
      </div>

      <div className={styles.actionCounter}>
        Actions: {0}
      </div>

    </div>
  );
};