import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'

import axios from "axios";
import "./style.css";


const Main = () => {
    const [pokeData, setPokeData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setNextUrl]=useState();
    const [previous,setPrevious]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res)
        setNextUrl(res.data.next)
        setPrevious(res.data.previous)
        getPokeData(res.data.results)
        setLoading(false)
        // console.log(pokeData)
    }

    const getPokeData=async(res)=>{
res.map(async(item)=>{
    const result=await axios.get(item.url)
    // console.log(result)
    setPokeData(state=>{state=[...state,result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
    return state;
})
})
    }
    useEffect(()=>{
    pokeFun()
    },[url])

  return (
    <>
      <div className="container">
        <div className="left-content">
            <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
            <div className="btn-grup">
              <button onClick={()=>{
                setPokeData([])
                setUrl(previous)}}>Previous</button>
              <button onClick={()=>{
                 setPokeData([])
                 setUrl(nextUrl)}}>Next</button>
            </div>
            
        </div>


        <div className="right-content">
<Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  )
}

export default Main
