import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"

import Header from "../Header"
import RandomPlanet from "../RandomPlanet"
import PeoplePage from "../PeoplePage"
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

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

    return (
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

        <PeoplePage />
      </div>
    )
  }
}
