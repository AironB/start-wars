import {useEffect, useState} from 'react'

const APIpeople="https://swapi.dev/api/species/"

export const usePeopleData = (name) => {
    const [peoples, setPeoples] = useState([
        {
          name: {name:""},
          clasification:{clasification:""},
          designation:{designation:""}  
        }
    ])
    const fetchPeoples = async()=>{

        let response = await fetch(APIpeople) 
        let data = await response.json()
        let filteredPeoples = data;
        console.log(data);
        if (name!=""){
            
            filteredPeoples = data.filter((people)=>people.name === name)
            //console.log(filteredPeople);
            //console.log(filteredPeople);
        }
        setPeoples(filteredPeoples);        
    }
    useEffect(()=>{
        fetchPeoples();
    },[name])

  return (
    <>
  {peoples.map((people, i)=>(
        <div key={i} className="col-md-6 col-sm-12 col-lg-4 g-2">
            <p>
                {people.name}
                {people.clasification}
                {people.designation}
            </p>
        </div>
     ))} 
    </>
  )
}


