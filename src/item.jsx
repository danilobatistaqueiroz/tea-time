import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './store/item-slice'
import styles from './item.module.css'
import { useSelector } from 'react-redux'
import { selectEdit, update, cancel } from './store/item-slice'
import { useEffect } from 'react'

export function Item() {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const edit = useSelector(selectEdit);
  const [descriptionValue, setDescriptionValue] = useState(edit.description);

  useEffect( () => {
    setDescriptionValue(edit.description)
  },[edit])

  

  function addClick() {
    if(!inputValue) return;
    let time = new Date();
    let formatedTime = time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: 'h23'
    });
    dispatch(add([formatedTime,inputValue]));
    setInputValue('');
    setDescriptionValue('');
  }

  function updateClick() {
    if(!descriptionValue) return;
    dispatch(update([edit.hour,descriptionValue]));
    setInputValue('');
    setDescriptionValue('');
  }

  function inputEnter(e){
    if(e.code=='Enter'){
      addClick();
    }
  }

  function descriptionEnter(e){
    if(e.code=='Enter'){
      updateClick();
    }
  }

  function cancelClick() {
    dispatch(cancel())
  }

  return (
    <div className={styles.row}>
      {
        (!edit||edit.hour=='')
        ?
          <>
            <input type="text" 
              className={styles.description} 
              value={inputValue} 
              onChange={e => setInputValue(e.target.value)} 
              onKeyDown={inputEnter}/>
            <button
              className={styles.button}
              aria-label="add"
              onClick={addClick}
            >
              Add
            </button>
          </>
        :
          <>
            <input type="text" 
              className={styles.description} 
              value={descriptionValue} 
              onChange={e => setDescriptionValue(e.target.value)} 
              onKeyDown={descriptionEnter}/>
            <button
              className={styles.button}
              aria-label="update"
              onClick={updateClick}
            >
              Update
            </button>
            <button
              className={ `${styles.button} ${styles.cancel}` }
              aria-label="cancel"
              onClick={cancelClick}
            >
              Cancel
            </button>
          </>
      }
    </div>
  )
}