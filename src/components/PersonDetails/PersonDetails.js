import React, { Component } from "react"

import SwapiService from "../../services/SwapiService"

import Spinner from "../Spinner"
import ErrorIndicator from "../ErrorIndicator"

import "./PersonDetails.css"

export default class PersonDetails extends Component {
  swapiService = new SwapiService()

  state = {
    person: null,
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  onPersonLoaded = person => {
    this.setState({
      person,
      loading: false,
    })
  }

  onLoading() {
    this.setState({
      loading: true,
    })
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updatePerson() {
    const { personId } = this.props
    if (!personId) {
      return
    }

    this.setState({
      loading: true,
    })

    this.swapiService
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError)
  }

  render() {
    const { person, loading, error } = this.state
    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const hasData = !(loading || error)
    const errorMassage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <PersonView person={person} /> : null

    return (
      <div className="person-details card">
        {errorMassage}
        {spinner}
        {content}
      </div>
    )
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person

  return (
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
