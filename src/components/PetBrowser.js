import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  selectedPets =() =>{

 return this.props.pets.map(p => {
 
return  	<Pet pet={p} onAdoptPet={this.props.onAdoptPet} key={p.id}/>
 })

  }

  
  render() {
    return <div className="ui cards">{this.selectedPets()}</div>
  }
}

export default PetBrowser
