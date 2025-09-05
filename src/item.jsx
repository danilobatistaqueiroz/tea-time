import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './store/item-slice'
import styles from './item.module.css'

export function Item() {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={styles.row}>
      <input type="text" className={styles.description} value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button
        className={styles.button}
        aria-label="add"
        onClick={() => {
          let time = new Date();
            let formatedTime = time.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hourCycle: 'h23'
            });
            dispatch(add([formatedTime,inputValue]))
          }
        }
      >
        Add
      </button>
    </div>
  )
}