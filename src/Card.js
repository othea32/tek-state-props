import React from 'react'

function Card({data}) {
  return (
    <div>
        {data.map((person) =>{
            return(
                <div className="card">
                    <h1>{person.name}</h1>
                    <h2>{person.age}</h2>
                    <p>{person.job}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Card