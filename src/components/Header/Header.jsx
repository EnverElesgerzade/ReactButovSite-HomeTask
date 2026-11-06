import React from 'react'
import { NavLink } from 'react-router'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header className='flex justify-between  items-center relative top-[20px]'>
              <div className="lefttxt relative left-[70px]">
                <p className='text-[#000000]  font-[500] text-[20px]'>Nombre del sitio</p>
              </div>
            <nav className='flex gap-[10px] relative right-[13%] list-none'>
                <li className='text-[#000000] font-[500] text-[20px]'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='text-[#000000]  font-[500] text-[20px]'>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className='text-[#000000]  font-[500] text-[20px]'>
                    <NavLink to='/article'>Article</NavLink>
                </li>
               <Button position="relative" left="left-[10px]"/>
            </nav>
            

        </header>
    )
}
export default Header