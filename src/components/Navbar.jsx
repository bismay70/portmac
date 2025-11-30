import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="" alt="" />
        <p></p>
        <ul>
          {navLinks.map(item)

          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar