import { useDispatch,useSelector } from "react-redux"
import { increment,decrement,incrementbyamount } from "./features/counterSlice"
import Navbar from "./Navbar";
function App() {
const count=useSelector((state)=>state.counter.value)
const dispatch=useDispatch();
  return (
    <>
    <div style={{justifyContent:'center',alignContent:'center',margin:'auto',textAlign:'center',height:'100vh'}}>
    <Navbar /> <br/>
    <div style={{display:'flex',alignItems:'center',alignContent:'center',justifyContent:'center',gap:'20px'}}>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <div>{count}</div>
    <button onClick={()=>dispatch(increment())} >+</button>
    </div>
    
    </div>
     
    </>
  )
}

export default App
