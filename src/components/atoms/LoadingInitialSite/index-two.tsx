import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '@images/logo-ienel.png'
import { FaSolarPanel, FaCog } from 'react-icons/fa'
import { GiElectricalResistance } from 'react-icons/gi'
import {
  MdElectricBolt,
  MdOutlineElectricalServices,
  MdSolarPower
} from 'react-icons/md'

import {
  ContentLoadingInitialSite,
  BoxLoading,
  ContentLogo,
  LoadingIcon
} from './styledComponents'

const icons = [
  <FaSolarPanel key="1" />,
  <MdSolarPower key="2" />,
  <GiElectricalResistance key="3" />,
  <FaCog key="4" />,
  <MdOutlineElectricalServices key="5" />,
  <MdElectricBolt key="6" />
]

export const LoadingInitialSite = () => {
  const [iconIndex, setIconIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
    }, 350)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <ContentLoadingInitialSite>
      <BoxLoading>
        <ContentLogo>
          <Image
            priority
            style={{ width: '100%', height: '100%' }}
            src={Logo}
            alt="Logo Ienel"
          />
        </ContentLogo>
        <LoadingIcon>{icons[iconIndex]}</LoadingIcon>
      </BoxLoading>
    </ContentLoadingInitialSite>
  )
}
