import React, { useEffect } from 'react'
import Sprite from './Sprite'
import axios from 'axios';
import Stats from './Stats';
import { useQuery } from '@tanstack/react-query';


function Pokemoncard({currPokemon, pkmnList, getNewPokemon}) {


    // Object to store all the info of the selected pokemon
    let pokemonData = {
        spriteURL: "",
        primaryType: "",
        secondaryType: "",
        name:"",
        hp: 0,
        atk: 0,
        def: 0,
        spatk: 0,
        spdef: 0,
        spd: 0
    }

    // function to set data in pokemonData object
    const updateData = (data) => {
        pokemonData.name = data.name;
        pokemonData.spriteURL = data.sprites.front_default;
        pokemonData.primaryType = data.types[0].type.name;
        pokemonData.secondaryType = data.types.length > 1 ? data.types[1].type.name : "";
        pokemonData.hp = data.stats[0].base_stat;
        pokemonData.atk = data.stats[1].base_stat;
        pokemonData.def = data.stats[2].base_stat;
        pokemonData.spatk = data.stats[3].base_stat;
        pokemonData.spdef = data.stats[4].base_stat;
        pokemonData.spd = data.stats[5].base_stat;
    }

    // Update currPokemon to the previous pokemon from the array
    const handlePrev = () => {
        let index = pkmnList.indexOf(currPokemon)
        if(index === 0)return
        getNewPokemon(pkmnList[index - 1])
    }

    // Update currPokemon to the previous pokemon from the array
    const handleNext = () => {
        let index = pkmnList.indexOf(currPokemon)
        if(index === pkmnList.length - 1)return
        getNewPokemon(pkmnList[index + 1])
    }

    // React query to fetch data from PokeAPI
    const { isSuccess, isLoading, error, data, refetch } = useQuery({
        queryKey: ['pokemonData'],
        queryFn: async () => await axios.get(`https://pokeapi.co/api/v2/pokemon/${currPokemon}`)
                .then(response => response.data),

      });

    // Refetch data when currPokemon changes
    useEffect(() => {
        refetch()
    }, [currPokemon])
    
    if(isSuccess){ 
        updateData(data)
    }

    if(!isLoading){ 
        return (
            <div className='font-sans card-cont mt-4 max-w-[800px] w-full flex flex-row justify-center items-center'>

                <div className="max-w-[600px] min-h-92 w-full h-full mx-auto p-5 rounded-3xl bg-white ">
                    <h1 className="text-gray-500 text-center text-3xl p-2">#{data.id} Pokemon Card</h1>
                    <h2 className='text-gray-800 text-4xl mt-[-15px] p-5 flex justify-center items-center'>{pokemonData.name}</h2>
                    
                    {/* Sprite component that displays the sprite and type */}
                    <Sprite pokeImg={pokemonData.spriteURL} typeOne={pokemonData.primaryType} typeTwo={pokemonData.secondaryType}/>
                    
                    {/* Stats component */}
                    <Stats stats={[pokemonData.hp, pokemonData.atk, pokemonData.def, pokemonData.spatk, pokemonData.spdef, pokemonData.spd]}/>
                    
                    {/* Buttons to select prev and next pokemon */}
                    <div className="pagination w-full flex justify-between">
                        <button id="prev" className=" text-white bg-neutral-400 p-2 rounded-xl hover:bg-neutral-700" onClick={handlePrev}>Prev</button>
                        <button id="next" className=" text-white bg-neutral-400 p-2 rounded-xl hover:bg-neutral-700" onClick={handleNext}>Next</button>
                    </div>
                </div>
              
            </div>
          )
    } else {
        return (
            <div className="">...Loading</div>
        )
    }
  
}

export default Pokemoncard;
