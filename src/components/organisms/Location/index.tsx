import React from 'react'
import { Map } from '@components/index'
import { ContentLocation } from './styledComponents'

export const Location = () => {
  return (
    <ContentLocation name="location" id="location">
      <Map apiKey="AIzaSyAI4gBlWIr104WCq4gqiFT6T-XVssOdIjU" />
    </ContentLocation>
  )
}
