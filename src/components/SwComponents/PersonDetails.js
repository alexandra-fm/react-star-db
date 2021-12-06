import React from "react"

import { withSwapiService } from "../HocHelpers"
import ItemDetails, { Record } from "../ItemDetails/ItemDetails"

const PersonDetails = ({ selectedPerson, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService

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

export default withSwapiService(PersonDetails)
