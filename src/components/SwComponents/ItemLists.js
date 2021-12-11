import React from "react"

import { Link } from "react-router-dom"

import ItemList from "../ItemList"
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose,
} from "../HocHelpers"

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name, id }) => (
  <Link to={`/starships/${id}`}>
    <span>
      {name} ({model})
    </span>
  </Link>
)

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople,
  }
}
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets,
  }
}
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships,
  }
}

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList)

export { PersonList, PlanetList, StarshipList }
