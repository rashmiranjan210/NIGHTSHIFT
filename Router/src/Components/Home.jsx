import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{color:'red',backgroundColor:'aliceblue',textAlign:'center',padding:'20px',height:'90vh',justifyContent:'center',margin:'auto',alignContent:'center'}}>
      <h1>Welcome to the home page!</h1>
      <p>This is a simple example of a stateless functional component in React.</p>
      <Link to='/'></Link>
    </div>
  )
}

export default Home
