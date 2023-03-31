import React from 'react'
import { Map } from '@components/index'
import { ContentLocation } from './styledComponents'

export const Location = () => {
  return (
    <ContentLocation name="location" id="location">
      <Map apiKey={process.env.API_KEY_GOOGLE_MAPS ?? ''} />
    </ContentLocation>
  )
}
