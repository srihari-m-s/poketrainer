import React from 'react'


function Natures() {
  return (
    <div className='font-sans natures-cont mt-5 max-w-[800px] w-full flex flex-col justify-center items-center text-white'>

      {/* Natures Table */}
      <table className="font-sans w-[60%] text-xs md:text-lg md:w-full natures-table table-auto border-collapse border-white border">
        <tbody>
        <tr>
            <th className='border-white border px-1 sm:px-5 md:p-5 text-center'>Natures</th>
            <th className='border-white border p-1 md:p-5 text-center text-red-500'>- Atk</th>
            <th className='border-white border p-1 md:p-5 text-center text-red-500'>- Def</th>
            <th className='border-white border p-1 md:p-5 text-center text-red-500'>- SpAtk</th>
            <th className='border-white border p-1 md:p-5 text-center text-red-500'>- SpDef</th>
            <th className='border-white border p-1 md:p-5 text-center text-red-500'>- Spd</th>
        </tr>

        <tr>
            <th className='border-white border p-1 md:p-5 text-center text-green-500'>+ Atk</th>
            <td className='border-white border p-1 md:p-5 text-center bg-zinc-700'>Hardy</td>
            <td className='border-white border p-1 md:p-5 text-center'>Lonely</td>
            <td className='border-white border p-1 md:p-5 text-center'>Adamant</td>
            <td className='border-white border p-1 md:p-5 text-center'>Naughty</td>
            <td className='border-white border p-1 md:p-5 text-center'>Brave</td>
        </tr>

        <tr>
            <th className='border-white border p-1 md:p-5 text-center text-green-500'>+ Def</th>
            <td className='border-white border p-1 md:p-5 text-center'>Bold</td>
            <td className='border-white border p-1 md:p-5 text-center bg-zinc-700'>Docile</td>
            <td className='border-white border p-1 md:p-5 text-center'>Impish</td>
            <td className='border-white border p-1 md:p-5 text-center'>Lax</td>
            <td className='border-white border p-1 md:p-5 text-center'>Relaxed</td>
        </tr>

        <tr>
            <th className='border-white border p-1 md:p-5 text-center text-green-500'>+ SpAtk</th>
            <td className='border-white border p-1 md:p-5 text-center'>Modest</td>
            <td className='border-white border p-1 md:p-5 text-center'>Mild</td>
            <td className='border-white border p-1 md:p-5 text-center bg-zinc-700'>Bashful</td>
            <td className='border-white border p-1 md:p-5 text-center'>Rash</td>
            <td className='border-white border p-1 md:p-5 text-center'>Quiet</td>
        </tr>

        <tr>
            <th className='border-white border p-1 md:p-5 text-center text-green-500'>+ SpDef</th>
            <td className='border-white border p-1 md:p-5 text-center'>Calm</td>
            <td className='border-white border p-1 md:p-5 text-center'>Gentle</td>
            <td className='border-white border p-1 md:p-5 text-center'>Careful</td>
            <td className='border-white border p-1 md:p-5 text-center bg-zinc-700'>Quirky</td>
            <td className='border-white border p-1 md:p-5 text-center'>Sassy</td>
        </tr>

        <tr>
            <th className='border-white border p-1 md:p-5 text-center text-green-500'>+ Spd</th>
            <td className='border-white border p-1 md:p-5 text-center'>Timid</td>
            <td className='border-white border p-1 md:p-5 text-center'>Hasty</td>
            <td className='border-white border p-1 md:p-5 text-center'>Jolly</td>
            <td className='border-white border p-1 md:p-5 text-center'>Naive</td>
            <td className='border-white border p-1 md:p-5 text-center bg-zinc-700'>Serious</td>
        </tr>
        </tbody>
      </table>

      <div className='w-[80%] mt-5'>
        <p className="text-white text-md md:text-xl">
        Rather than just being a superficial personality, Natures actually affect the growth of a Pokémon. Each nature increases one of its stats by 10% and decreases one by 10% (by the time it reaches level 100). Five natures increase and decrease the same stat and therefore have no effect (Diagonal with gray background).
        </p>
        <br />
        <p className="text-white text-md md:text-xl">
        In most cases it is preferable to have a nature that decreases either Attack or Special Attack for Pokémon whose strengths are the opposite type of attack. Espeon, for example, favours Special moves, so it's best to use a nature that decreases its Attack since it won't be used, keeping the defenses untouched.
        </p>
        <p className="text-white text-md md:text-xl mt-4"><a href="https://pokemondb.net/mechanics/natures" target='blank' className="text-red-500">Source</a></p>
      </div>

    </div>
  )
}

export default Natures