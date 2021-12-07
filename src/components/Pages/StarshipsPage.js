import React, { Component } from "react"

import Row from "../Row"
import { StarshipDetails, StarshipList } from "../SwComponents"

export default class PeoplePage extends Component {
  state = { selectedItem: null }

  onItemSelected = selectedItem => {
    this.setState({
      selectedItem,
    })
  }
  render() {
    const { selectedItem } = this.state

    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    )
  }
}
