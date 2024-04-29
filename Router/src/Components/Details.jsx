import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'
const Details = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
      fetch("https://api.github.com/users/rashmiranjan210")
      .then(response=>response.json())
      .then(data=>{
        // console.log(data)
        setdata(data)
      })
    }, [])

    const [pic, setpic] = useState([])
    const url='https://api.github.com/users/rashmiranjan210'
    const Image=async()=>{
        const response=await axios(url
        //     ,{
        //     header:{
        //         Accept:'application/json'
        //     }
        // }
    )
        console.log(response.data)
        setpic(response.data.avatar_url)
    }
    
    
  return (
    <div style={{justifyContent:'center',alignContent:'center',textAlign:'center',height:'90vh'}}>
      <h1>Name:{data.name}</h1>
      <p>GITHUBID:{data.login}.</p>
      <p>Details about the product will go here.</p>
      <button onClick={Image}>Generate Image</button> <br/>
    <img src={pic} />
    </div>
  )
}

export default Details
