import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"

import ItemList from "../ItemList"
import PersonDetails from "../PersonDetails"
import Row from "../Row"
import ErrorIndicator from "../ErrorIndicator"

import "./PeoplePage.css"
export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
    hasError: false,
  }

  componentDidCatch() {
    console.log("componentDidCatch")
    this.setState({
      hasError: true,
    })
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    )

    const personDetails = <PersonDetails personId={this.state.selectedPerson} />

    return <Row left={itemList} right={personDetails} />
  }
}
