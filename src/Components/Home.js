import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>Home
      <div className='container'>
        <Link to={'profile'}><button className='btn btn-sm btn-outline-primary mx-2'>Profile</button>
        </Link>
       <Link to={'setting'}>
       <button className='btn btn-sm btn-outline-danger mx-2'>Setting</button></Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Home