import React, { Component } from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import SwapiService from "../../services/SwapiService"
import DummySwapiService from "../../services/DummySwapiService"

import { SwapiServiceProvider } from "../SwapiServiceContext"

import Header from "../Header"
import RandomPlanet from "../RandomPlanet"
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages"
import { StarshipDetails } from "../SwComponents"

import ErrorButton from "../ErrorButton"
import ErrorBoundry from "../ErrorBoundry"

import "./App.css"

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return {
        swapiService: new Service(),
      }
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
    const planet = this.state.showRandomPlanet ? (
      <RandomPlanet updateInterval={5000} />
    ) : null

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
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
              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipsPage />} />
                <Route path="/starships/:id" element={<StarshipDetails />} />
                <Route path="*" element={<h2>Page not found</h2>} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
