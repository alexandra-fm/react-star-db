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

  render() {
    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    )
  }
}
