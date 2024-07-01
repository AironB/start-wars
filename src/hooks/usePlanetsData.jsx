
import { useState, useEffect } from 'react'

const APIplanets = "https://swapi.dev/api/planets/" 

export const Planets = () => {

    const [planets, setPlanets]=useState([])
    const fetchPlanets= async()=>{
        let response = await fetch(APIplanets)
        let data = await response.json()

        let filterPlanets = data;
        console.log(data)
        if(data.name="Tatooine"){
            filterPlanets = data.filter((name)=>data.name=== name)
            console.log(filterPlanets);
        }
        setPlanets(filterPlanets);
    }
    useEffect(()=>{
        fetchPlanets();
    })
  return 
    Planets
}