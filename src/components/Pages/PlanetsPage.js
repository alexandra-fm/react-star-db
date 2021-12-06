import React, { Component } from "react"

import Row from "../Row"
import { PlanetDetails, PlanetList } from "../SwComponents"

export default class PeoplePage extends Component {
  state = { selectedItem: null }

  onItemSelected = id => {
    this.setState({
      selectedItem: id,
    })
  }
  render() {
    const { selectedItem } = this.state

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    )
  }
}
