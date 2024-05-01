import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count=useSelector((state)=>state.counter.value)
  return (
    <div>
      count is:{count}
    </div>
  )
}

export default Navbar
