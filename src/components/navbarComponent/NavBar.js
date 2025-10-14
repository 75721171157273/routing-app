import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to={'/'}><i class="bi bi-sign-turn-slight-right-fill"></i> &nbsp; Routing-App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/products'}>Produtcs</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
// we do'nt use anchor tag because it refresh the page, that's why we use Link tag instead of anchor tag.link use to load the pafe

