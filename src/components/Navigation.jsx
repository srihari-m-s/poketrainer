import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Searchbox from './Searchbox'
import Hamsearchbox from './Hamsearchbox'
import { Link } from 'react-router-dom'

function Navigation({getPokemon, pkmnList}) {
    
    const [navFlag, setNavFlag] = useState(false)
    const handleNavClose = (flag) => {
        setNavFlag(flag);
    }

  return (
    <div className='max-w-[1240px] h-20 mx-auto flex justify-between items-center text-white border-b border-gray-400 bg-gray-950 sticky top-0 z-50'>

        {/* Main Navbar */}
        <h1 className="p-2 text-xl md:text-4xl font-bold"><Link to="/poketrainer" className="p-2"><span className='text-red-500'>Poke</span>Trainer</Link></h1>
        
        <ul className="hidden md:flex text-sm lg:text-lg">
            <li className="p-1 md:p-2"><Link to="/poketrainer/typechart" className="p-2 rounded-full hover:bg-gray-500 duration-100 ease-in-out">Type Chart</Link></li>
            <li className="p-1 md:p-2"><Link to="/poketrainer/natures" className="p-2 rounded-full hover:bg-gray-500 duration-100 ease-in-out">Natures</Link></li>
            <li className="p-1 md:p-2"><Searchbox pkmnList = {pkmnList} getPokemon={getPokemon}/></li>
        </ul>

        <div className="block md:hidden" onClick={() => setNavFlag(!navFlag)}>
            {navFlag? <AiOutlineClose size={30} color='white' className='mx-5 hover:cursor-pointer'/> : <AiOutlineMenu size={30} color='white' className='mx-5 hover:cursor-pointer'/> }
        </div>

        {/* Hamburger Menu */}
        <div className={navFlag? 'fixed md:hidden left-0 top-0 w-[50%] h-screen z-50 bg-gray-950 border-r border-gray-500 ease-in-out duration-500': 'fixed hidden'}>
            <h1 className="text-xl font-bold m-4" onClick={() => handleNavClose(false)}><Link to="/poketrainer" className="p-2"><span className='text-red-500'>Poke</span>Trainer</Link></h1>
            <ul className="text-lg p-4">
                <li className="p-2"><Hamsearchbox pkmnList = {pkmnList} getPokemon={getPokemon} handleNavClose={handleNavClose}/></li>
                <li className="p-2 border-b border-gray-400" onClick={() => handleNavClose(false)}><Link to="/poketrainer/typechart" className="p-2 rounded-full hover:bg-gray-500 duration-100 ease-in-out">Type Chart</Link></li>
                <li className="p-2 border-b border-gray-400" onClick={() => handleNavClose(false)}><Link to="/poketrainer/natures" className="p-2 rounded-full hover:bg-gray-500 duration-100 ease-in-out">Natures</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation
