import React, { useEffect } from 'react'
import './Sprite.css'

function Sprite({pokeImg, typeOne, typeTwo}) {

  // pokemon type colors. source = apaleslimghost/pokemon-type-colours.js
  const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  //set and update colors based on types
  useEffect(() => {

    setTimeout(() => {

      const types = document.querySelectorAll(".type")
      for(let i = 0; i<types.length; i++){
        if(i === 0){
          types[i].style.backgroundColor = colors[typeOne]
        } else {
          types[i].style.backgroundColor = colors[typeTwo]
        }
        
      }

    },100)

  },[typeOne, typeTwo])


  if(pokeImg){
      return (
          <div className='sprite-cont bg-neutral-300 rounded-3xl p-5 w-[80%] mx-auto shadow-zinc-600 shadow-sm'>
            
            <img src={pokeImg} alt="image of selected pokemon" className='my-5 mx-auto' id="sprite"/>
            
            <div className="px-5 flex justify-center items-center">
              <button id="button1" className="type text-xl w-36 p-4 text-white shadow-black shadow-sm rounded-full m-3">{typeOne}</button>
              <button id="button2" className={typeTwo === "" ? "hidden" : "type text-xl w-36 p-4 text-white shadow-black shadow-sm rounded-full m-3"}>{typeTwo}</button>
            </div>
          </div>
        )
  } else {
      return (
          <div>
              <h1 className='bg-slate-100 rounded-full p-5 mx-auto text-center'>Sprite unvailable</h1>
          </div>
      )
  }
}

export default Sprite
