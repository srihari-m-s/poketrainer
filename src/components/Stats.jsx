import React, { useEffect, useRef } from 'react'
import './stats.css'

function Stats({stats}) {

    const mounted = useRef();

    // useEffect hook to check if component updates and if it did animate the stats bars
    useEffect(() => {
        const bars = document.getElementsByClassName("bar")

        //if(!mounted.current){
            //mounted.current = true;

        //} else {

            for(let i = 0; i<bars.length; i++){
                bars[i].classList.remove("slide")
            }
    
    
            setTimeout( () => {
    
                for(let i = 0; i<bars.length; i++){
                    bars[i].classList.add("slide");
                    bars[i].style.width = `${1.5 * (bars[i].dataset.stat)}px`
                    if(bars[i].dataset.stat > 79){
                        bars[i].style.backgroundColor = "green"
                    } else if (bars[i].dataset.stat > 49){
                        bars[i].style.backgroundColor = "gold"
                    } else {
                        bars[i].style.backgroundColor = "crimson"
                    }
                }
    
            },750)
        //}

    },[stats])

  return (
    <div className='stats-cont py-5 flex-col justify-between items-center w-[80%] mx-auto'>
        <div className="flex justify-start" id="" >
            <p className="w-16 h-10 pr-2 my-2 mr-3 flex items-center justify-end border-r border-neutral-400" id="">hp :</p>
            <div className="my-2 px-3 h-10 flex items-center justify-start bar rounded-xl text-white" id="hp"
             data-stat={stats[0]}>{stats[0]}</div>
        </div>

        <div className="flex justify-start" id="" >
            <p className="w-16 h-10 pr-2 my-2 mr-3 flex items-center justify-end border-r border-neutral-400" id="">atk :</p>
            <div className="my-2 px-3 h-10 flex items-center justify-start bar rounded-xl text-white" id="atk" 
             data-stat={stats[1]}>{stats[1]}</div>
        </div>

        <div className="flex justify-start" id="" >
            <p className="w-16 h-10 pr-2 my-2 mr-3 flex items-center justify-end border-r border-neutral-400" id="">def :</p>
            <div className="my-2 px-3 h-10 flex items-center justify-start bar rounded-xl text-white" id="def" 
             data-stat={stats[2]}>{stats[2]}</div>
        </div>

        <div className="flex justify-start" id="" >
            <p className="w-16 h-10 pr-2 my-2 mr-3 flex items-center justify-end border-r border-neutral-400" id="">sp.atk :</p>
            <div className="my-2 px-3 h-10 flex items-center justify-start bar rounded-xl text-white" id="spatk" 
             data-stat={stats[3]}>{stats[3]}</div>
        </div>

        <div className="flex justify-start" id="" >
            <p className="w-16 h-10 pr-2 my-2 mr-3 flex items-center justify-end border-r border-neutral-400" id="">sp.def :</p>
            <div className="my-2 px-3 h-10 flex items-center justify-start bar rounded-xl text-white" id="spdef" 
             data-stat={stats[4]}>{stats[4]}</div>
        </div>

        <div className="flex justify-start" id="" >
            <p className="w-16 h-10 pr-2 my-2 mr-3 flex items-center justify-end border-r border-neutral-400" id="">spd :</p>
            <div className="my-2 px-3 h-10 flex items-center justify-start bar rounded-xl text-white" id="spd" 
             data-stat={stats[5]}>{stats[5]}</div> 
        </div>
      
    </div>
  )
}

export default Stats
 