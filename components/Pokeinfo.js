import React from 'react'

const Pokeinfo = ({data}) => {
    console.log(data)
  return (<>
{
    (!data)?"":(<>
    <h1>{data.name}</h1>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
    {
        data.abilities.map(poke=>{
            return(
                <>
                <div className="group">
                    <h2>{poke.ability.name}</h2>
                </div>
                </>
            )
        })
    }
    <div className="ability">Abilities</div>
    <div className="base-stat">{
        data.stats.map(poke=>{
            return(
                <>
                <h3>{poke.stat.name}:{poke.base_stat}</h3>
                </>
            )
        })
    }</div>
    </>)
}
 </>
  )
}

export default Pokeinfo
