import {useEffect, useState} from 'react'

import {usePeopleData} from "../hooks/usePeopleData"

export const People = () => {

    const [name, setName] = useState("");

    let people = usePeopleData(name);
 
    return (
    <div className="container">
        <h1 className="text-white">People</h1>
        
        <label className='form-label text-white'>Filter by species</label>
        <select onChange={(e)=> setName(e.target.value)}>
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Droid">Droid</option>
          <option value="wookie">Wookie</option>
          <option value="Rodian">Rodian</option>
          <option value="Hutt">Hutt</option>
          <option value="Yoda's species">Yoda's species</option>
          <option value="Trandoshan">Trandoshan</option>
          <option value="Mon Calamari">Mon Calamari</option>
          <option value="Ewok">Ewok</option>
          <option value="Sullustan">Sullustan</option>
        </select>
    <div className="container-fluid">
   
    </div>
    </div>
  )
}
