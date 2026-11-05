import React from 'react'
import { Link } from 'react-router'
import Button from '../Button/Button'

const Header = () => {
    return (
        <header className='flex justify-between  items-center relative top-[20px]'>
              <div className="lefttxt relative left-[70px]">
                <p className='text-[#000000]  font-[500] text-[20px]'>Nombre del sitio</p>
              </div>
            <nav className='flex gap-[10px] relative right-[13%] list-none'>
                <li className='text-[#000000] font-[500] text-[20px]'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='text-[#000000]  font-[500] text-[20px]'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='text-[#000000]  font-[500] text-[20px]'>
                    <Link to='/article'>Article</Link>
                </li>
               <Button position="relative" left="left-[10px]"/>
            </nav>
            

        </header>
    )
}
export default Header