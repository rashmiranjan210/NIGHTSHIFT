import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { addtodo } from '../features/todoSlicer'

const Todo = () => {
    const [input, setinput] = useState()
    const dispatch=useDispatch()
    const eventHandeler=(e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setinput('')
    }

  return (
    <div>
      
      <form onSubmit={eventHandeler} style={{justifyContent:'center',alignContent:'center',textAlign:"center",}}>
       <div style={{width:'500px',margin:'auto',backgroundColor:"grey"}}><h1>Todo</h1></div>
        
        <label >What needs to be done?</label><br />
        <input type="text" id="todo" name="todo" required value={input} onChange={(e)=>setinput(e.target.value)} /><br />
        <button type="submit" style={{backgroundColor:'aliceblue',marginTop:'20px',padding:'10px',borderRadius:'10px'}}>Add Task</button>
      </form>
    </div>
  )
}

export default Todo
