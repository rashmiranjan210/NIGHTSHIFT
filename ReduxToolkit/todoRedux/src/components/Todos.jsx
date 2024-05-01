import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removetodo } from '../features/todoSlicer'
const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch=useDispatch()
  return (
    <div>
      <div>
            <ul style={{width:'200px',margin:'auto',marginTop:'30px'}}>
                {todos.map((todo)=>(
                    <li style={{textDecoration:'none',listStyle:'none',display:'flex',gap:'40px',justifyContent:'center',alignContent:'center',textAlign:"center",marginTop:'20px',backgroundColor:"aliceblue"}} key={todo.id} >
                        <div>{todo.text}</div>
                        <button onClick={() => dispatch(removetodo(todo.id))} style={{color:'red'}}>X</button> <br />
                    </li>
                ))}
            </ul>
      </div>
    </div>
  )
}

export default Todos
