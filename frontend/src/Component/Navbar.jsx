import React from 'react'

const Navbar = () => {
  return (
    <div className='NavContainer' >
      <ul className='NavList'>
        <li className="inactive">< a href='#Home'>Home</a></li>
        <li className="inactive">< a href='#About'>About</a></li>
        <li className="inactive">< a href='#Skills'>Skills</a></li>
        <li className="inactive">< a href='#Education'>Education</a></li>
        <li className="inactive">< a href='#Contact'>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar