import React from 'react'
import { Link } from 'react-router-dom'

function Topber() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to={'/'}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" >Home</a>
        </li></Link>
        <Link to={'/dashboard'}>
        <li class="nav-item">
          <a class="nav-link" >Dashboard</a>
        </li></Link>
        <Link to={'/fooder'}>
        <li class="nav-item">
          <a class="nav-link" >fooder</a>
        </li>
        </Link>
        <Link to={'/hooks'}>
        <li class="nav-item">
          <a class="nav-link" >Hooks</a>
        </li>
        </Link>
        <Link to={'/from'}>
        <li class="nav-item">
          <a class="nav-link" >From</a>
        </li>
        </Link>
       
       
       
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Topber