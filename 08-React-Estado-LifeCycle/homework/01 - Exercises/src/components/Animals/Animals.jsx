import React from 'react'
export default class Animals extends React.Component {
  render () {
    const animals = this.props.animals
    if(animals.length > 0){
      animals.map((animal, index) => {
        return (
          <div key={`${animal}_${index}`}>
            <h5>{animal.name}</h5>
            <img src={animal.image} alt={animal.name} width='300px'></img>
            <span>{animal.specie}</span>
          </div>
        )
      })
    } else {
      return <h5>No existen animales</h5>
    }
  }
  
}