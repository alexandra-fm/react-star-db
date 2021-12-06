import React from "react"

import { withSwapiService } from "../HocHelpers"
import ItemDetails, { Record } from "../ItemDetails/ItemDetails"

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

export default withSwapiService(StarshipDetails)
