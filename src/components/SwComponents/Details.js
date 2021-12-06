import React from "react"

import { SwapiServiceConsumer } from "../SwapiServiceContext"
import ItemDetails, { Record } from "../ItemDetails/ItemDetails"

const PersonDetails = ({ selectedPerson }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
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
      }}
    </SwapiServiceConsumer>
  )
}
const PlanetDetails = ({ selectedPlanet }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
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
      }}
    </SwapiServiceConsumer>
  )
}
const StarshipDetails = ({ selectedStarship }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getStarshipImage }) => {
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
      }}
    </SwapiServiceConsumer>
  )
}

export { PersonDetails, PlanetDetails, StarshipDetails }
