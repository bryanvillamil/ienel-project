import React from 'react'
import { Animate, Title, CardService } from '@components/index'
import { IPPropsService } from '@typed/services'
import {
  ContentServices,
  InfoServices,
  ServicesCards
} from './styledComponents'
import {
  MdElectricalServices,
  MdOutlineHighlight,
  MdEnergySavingsLeaf,
  MdEngineering
} from 'react-icons/md'
import 'animate.css'

export const Services = () => {
  const services: IPPropsService[] = [
    {
      id: 1,
      nombreDelServicio: 'Redes eléctricas',
      descripcionDelServicio:
        'Diseño y construcción de redes eléctricas de baja y alta tensión.',
      iconoDelServicio: MdElectricalServices
    },
    {
      id: 2,
      nombreDelServicio: 'Sistemas de iluminación',
      descripcionDelServicio:
        'Diseño y construcción de sistemas de iluminación pública y privada.',
      iconoDelServicio: MdOutlineHighlight
    },
    {
      id: 3,
      nombreDelServicio: 'Eficiencia energética',
      descripcionDelServicio:
        'Evaluación, auditoría y consultoría en eficiencia energética para empresas y hogares.',
      iconoDelServicio: MdEnergySavingsLeaf
    },
    {
      id: 5,
      nombreDelServicio: 'Ingeniería civil',
      descripcionDelServicio:
        'Servicios de ingeniería civil, como diseño y construcción de estructuras de edificios y puentes.',
      iconoDelServicio: MdEngineering
    }
  ]
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
            {services.map((service) => {
              return <CardService service={service} key={service.id} />
            })}
          </ServicesCards>
        </InfoServices>
      </Animate>
    </ContentServices>
  )
}
