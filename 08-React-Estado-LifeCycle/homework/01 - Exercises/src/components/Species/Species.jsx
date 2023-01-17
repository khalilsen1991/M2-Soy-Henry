import React from 'react'

export default function Species (props) {
  return(
    <div>
      <h2>Species</h2>
      {
        props.species.map((element, index) => {
          return (
            <button key={index} onClick={props.handleSpecies} value={element}> {element} </button>
          )
        })
      }
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}

