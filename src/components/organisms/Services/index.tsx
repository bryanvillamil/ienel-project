import React from 'react'
import { Animate, Title, CardService } from '@components/index'
import { IPropsServices } from '@typed/services'

import {
  ContentServices,
  InfoServices,
  ServicesCards
} from './styledComponents'
import 'animate.css'

export const Services = ({
  dataServices
}: {
  dataServices: IPropsServices
}) => {
  return (
    <ContentServices name="services" id="services">
      <Animate
        entranceAnimation="animate__backInRight"
        exitAnimation="animate__backOutRight">
        <InfoServices>
          <Title
            type={2}
            text="Nuestros servicios"
            color="#000"
            align="center"
          />
          <ServicesCards>
            {dataServices?.dataServices.map((service, index) => {
              return <CardService service={service} key={index} />
            })}
          </ServicesCards>
        </InfoServices>
      </Animate>
    </ContentServices>
  )
}
