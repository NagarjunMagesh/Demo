import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Setting() {
  return (
    <div>
        setting
       <Link to={'dummy'}>  <button className='btn btn-sm btn-outline-primary mx-2'> Dummy</button>
       </Link>
        <Outlet/>
    </div>
  )
}

export default Setting