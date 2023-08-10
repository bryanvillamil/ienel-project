import React from 'react'
import Image from 'next/image'
import { Animate, Title } from '@components/index'
import { IAboutData } from '@typed/index'
import {
  ContentAbout,
  BgFixedAbout,
  ContainAbout,
  AboutBox,
  AboutRight,
  AboutLeft,
  AboutInfoBox
} from './styledComponents'
import BgAbout from '@assets/img/logo-clavija.png'
import 'animate.css'

export const About = ({ dataAbout }: { dataAbout: IAboutData }) => {
  const {
    quienesSomos: {
      titleMision,
      descMision,
      titleVision,
      descVision,
      imgPartners
    },
    valores: { title: titleValues, values, imgTeam }
  } = dataAbout

  return (
    <ContentAbout name="about" id="about">
      <BgFixedAbout style={{ backgroundImage: `url(${BgAbout.src})` }} />

      <Animate
        entranceAnimation="animate__backInLeft"
        exitAnimation="animate__backOutLeft">
        <ContainAbout>
          <Title type={2} text="Quienes Somos" color="#1B1918" align="center" />

          <AboutBox>
            <AboutRight>
              <Image
                src={imgPartners.url}
                alt={imgPartners.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                width={900}
                height={600}
              />
            </AboutRight>

            <AboutLeft>
              <AboutInfoBox>
                <Title
                  type={3}
                  text={titleMision}
                  color="#E30016"
                  align="center"
                />
                <p>{descMision}</p>
              </AboutInfoBox>

              <AboutInfoBox>
                <Title
                  type={3}
                  text={titleVision}
                  color="#E30016"
                  align="center"
                />
                <p>{descVision}</p>
              </AboutInfoBox>
            </AboutLeft>
          </AboutBox>

          <AboutBox>
            <AboutRight>
              <AboutInfoBox>
                <Title
                  type={3}
                  text={titleValues}
                  color="#E30016"
                  align="center"
                />
                <ul>
                  {values.map((val, idx) => {
                    return (
                      <li key={idx}>
                        <span>{val.title}</span>: {val.description}
                      </li>
                    )
                  })}
                </ul>
              </AboutInfoBox>
            </AboutRight>
            <AboutLeft>
              <Image
                src={imgTeam.url}
                alt={imgTeam.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                width={900}
                height={600}
              />
            </AboutLeft>
          </AboutBox>
        </ContainAbout>
      </Animate>
    </ContentAbout>
  )
}
