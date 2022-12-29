import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    
    <nav className='menu'>
        <ul className='menu-list'>
            <li className='menu-item'><button>Playeras</button></li>
            <li className='menu-item'><button>Hoodies</button></li>
            <li className='menu-item'><button>Tote Bags</button></li>
        </ul>
        <CartWidget/>
    </nav>
    
   
  )
}

export default NavBar