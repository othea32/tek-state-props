import React from 'react'

function Child() {
    const Person = {
        name: "Jane Doe",
        age: "35",
        email: "ceo@myfuturebusiness.com",
      }
    
      return Object.keys(Person).map((key, index) => {
        return (
          <h2>
            {key}: {Person[key]}
          </h2>
        )
      })
}

export default Child