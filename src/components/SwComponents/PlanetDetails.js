import React from "react"

import { withSwapiService } from "../HocHelpers"
import ItemDetails, { Record } from "../ItemDetails/ItemDetails"

const PlanetDetails = ({ selectedPlanet, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService
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

export default withSwapiService(PlanetDetails)
