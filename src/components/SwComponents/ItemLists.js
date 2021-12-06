import React from "react"

import SwapiService from "../../services/SwapiService"

import ItemList from "../ItemList"
import { withData, withSwapiService } from "../HocHelpers"

const swapiService = new SwapiService()

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>
  }
}

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
)

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople,
  }
}

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
)

/* const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
) */

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
)
const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships
)

export { PersonList, PlanetList, StarshipList }
