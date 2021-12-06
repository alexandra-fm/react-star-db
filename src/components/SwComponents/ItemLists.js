import React from "react"

import SwapiService from "../../services/SwapiService"

import ItemList from "../ItemList"
import { WithData } from "../HocHelpers"

const swapiService = new SwapiService()

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService

const PersonList = WithData(ItemList, getAllPeople)
const PlanetList = WithData(ItemList, getAllPlanets)
const StarshipList = WithData(ItemList, getAllStarships)

export { PersonList, PlanetList, StarshipList }
