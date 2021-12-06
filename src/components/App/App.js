import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"
import DummySwapiService from "../../services/DummySwapiService"

import Header from "../Header"
import RandomPlanet from "../RandomPlanet"
//import PeoplePage from "../PeoplePage"
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../SwComponents"
import { SwapiServiceProvider } from "../SwapiServiceContext"
import ErrorButton from "../ErrorButton"
import ErrorIndicator from "../ErrorIndicator"
//import PlanetDetails from "../PlanetDetails"
//import StarshipDetails from "../StarshipDetails"

import "./App.css"

export default class App extends Component {
  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedItem: null,
  }

  componentDidCatch() {
    console.log("componentDidCatch")
    this.setState({
      hasError: true,
    })
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  onItemSelected = id => {
    this.setState({
      selectedItem: id,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          {planet}
          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PersonDetails selectedPerson={this.state.selectedItem} />
          <PlanetDetails selectedPlanet={this.state.selectedItem} />
          <StarshipDetails selectedStarship={this.state.selectedItem} />

          <PersonList onItemSelected={this.onItemSelected} />

          <PlanetList onItemSelected={this.onItemSelected} />

          <StarshipList onItemSelected={this.onItemSelected} />

          {/* <PeoplePage /> */}
        </div>
      </SwapiServiceProvider>
    )
  }
}
