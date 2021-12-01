import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"

import Header from "../Header"
import RandomPlanet from "../RandomPlanet"
import ItemList from "../ItemList"
import PersonDetails from "../PersonDetails"
//import PlanetDetails from "../PlanetDetails"
//import StarshipDetails from "../StarshipDetails"

import "./App.css"

export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  onPersonSelected = id => {
    //console.log(id, " selectedPerson: id", this.state.selectedPerson)
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}
