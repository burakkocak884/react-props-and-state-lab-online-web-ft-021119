import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'

      }
    }

  }

  onChangeType =(givenType) => {
   
    this.setState({
      filters: {
 ...this.state.filters,
 type: givenType
      }
    })
    }

     onFindPetsClick = () => {
  let url = '/api/pets'
   if(this.state.filters.type !== 'all'){
    url = `/api/pets?type=${this.state.filters.type}`
   }
   fetch(url)
   .then(response => response.json())
   .then(pets => this.setState({pets}))
    
  }
  onAdoptPet = (petId) => {
    let listOfPets = this.state.pets
    
     let thePet = listOfPets.find(p => p.id === petId)
     thePet.isAdopted = true
     this.setState({
      listOfPets
     })

    
  
}


  render() {
    return (

      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
