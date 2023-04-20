import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { ContainerLinkWp } from './styledComponents'

interface IPropsNumber {
  number: string
}

export const BtnWhatsapp = (props: IPropsNumber) => {
  const { number } = props

  return (
    <ContainerLinkWp
      href={`https://api.whatsapp.com/send?phone=+${number}&text=Bienvenidos%20a%20IENEL,%20es%20un%20placer%20atenderte,%20cuentanos%20como%20podemos%20ayudarte`}
      target="_blank">
      <BsWhatsapp color="#fff" />
    </ContainerLinkWp>
  )
}
