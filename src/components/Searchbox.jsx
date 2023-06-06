import { useEffect, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';


function Searchbox({pkmnList, getPokemon, history}) {

  const namesList = pkmnList;

  let navigate = useNavigate();

  const goHome = () => {
    navigate("/poketrainer")
  }

  const [selectedMon, setSelectedMon] = useState("")
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    getPokemon(selectedMon)
    goHome()
    
  }, [selectedMon])

  const filteredMons =
    query === ''
      ? ''
      : namesList.filter((name) => {
          return name.toLowerCase().includes(query.toLowerCase())
        })


  return (
    <Combobox value={selectedMon} onChange={setSelectedMon}>
      <Combobox.Input className={"relative outline-0 border-b-2 border-gray-600 text-gray-200 bg-transparent px-2 ml-5 w-32 md:w-56"} placeholder='pikachu...'
        onChange={(event) => {
          if(event.target.value.length < 3){
            setQuery("")
          }
          setQuery(event.target.value)}} 
      />
      <Combobox.Options className={query.length >= 3 ?"bg-gray-700 absolute top-16 my-4 py-4 px-2 cursor-pointer rounded-2xl":"hidden"}>
        {
          query.length >= 3 ?
          filteredMons.slice(0,10).map((name) => (
          <Combobox.Option key={name} value={name} className={"w-full text-gray-400 p-2 border-b border-gray-900 hover:text-white"}>
            {name}
          </Combobox.Option>
          )) : ""
        }
      </Combobox.Options>
    </Combobox>
  )
}

export default Searchbox