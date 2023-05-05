import React, { memo } from 'react'

function ToDo(props) {
   let toDo = props.data;
   console.log('To Do Calling');
  return (
    <>
      <ul>
        {toDo.map((ele,keys)=>{
            return <li key={keys}>{ele.name}</li>
        })}
      </ul>
      <button onClick={props.myFunction}>Add ToDo</button>
    </>
  )
}
export default memo(ToDo)