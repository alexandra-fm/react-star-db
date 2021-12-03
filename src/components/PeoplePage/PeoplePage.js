import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"

import ItemList from "../ItemList"
import ItemDetails, { Record } from "../ItemDetails/ItemDetails"
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
    const { getAllPeople, getPerson, getPersonImage } = this.swapiService

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    )

    const itemDetails = (
      <ItemDetails
        itemId={this.state.selectedPerson}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    )
  }
}
