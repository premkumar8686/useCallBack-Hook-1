import React, { useCallback } from 'react'
import { useState } from 'react'
import ToDo from './ToDo';

export default function UseCallBack() {

    const [count, setCount] = useState(0);
    const [toDo, setToDo] = useState([]);

    const increment = () => {
        setCount(count + 1);
    }

    // const addToDo = () => {
    //     setToDo([...toDo,{id:1,name:'ToDo'}])
    // }

    const addToDo = useCallback(() => {
        setToDo([...toDo,{id:1,name:'ToDo'}])
    },[toDo]);

    console.log('Increment');

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>

      <ToDo data={toDo} myFunction={addToDo} />

      
    </>
  )
}
