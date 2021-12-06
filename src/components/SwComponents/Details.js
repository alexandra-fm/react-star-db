import React from "react"

import SwapiService from "../../services/SwapiService"

import ItemDetails, { Record } from "../ItemDetails/ItemDetails"

const swapiService = new SwapiService()

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService

const PersonDetails = ({ selectedPerson }) => {
  return (
    <ItemDetails
      itemId={selectedPerson}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}
const PlanetDetails = ({ selectedPlanet }) => {
  return (
    <ItemDetails
      itemId={selectedPlanet}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}
const StarshipDetails = ({ selectedStarship }) => {
  return (
    <ItemDetails
      itemId={selectedStarship}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

export { PersonDetails, PlanetDetails, StarshipDetails }
