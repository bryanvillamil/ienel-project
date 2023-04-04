import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { ContainerLinkWp } from './styledComponents'

export const BtnWhatsapp = () => {
  const number = '3116448934'
  return (
    <ContainerLinkWp
      href={`https://api.whatsapp.com/send?phone=+${number}&text=Bienvenidos%20a%20IENEL,%20escribemos%20y%20danos%20el%20placer%20de%20atenderte`}
      target="_blank">
      <BsWhatsapp color="#fff" />
    </ContainerLinkWp>
  )
}
