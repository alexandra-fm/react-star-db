import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"

import ItemList from "../ItemList"
import PersonDetails from "../PersonDetails"
import Row from "../Row"
import ErrorBoundry from "../ErrorBoundry"

import "./PeoplePage.css"
export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
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

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}
