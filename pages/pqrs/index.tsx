import React from 'react'
import type { GetStaticProps } from 'next'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import DefaultLayout from '@templates/default-layout'
import { getLogoContent } from '@services/logo'
import { getNumberWpContent } from '@services/numWhatsapp'
import { getFooterContent } from '@services/footer'
import { getDataContact } from '@services/contact'

import { BtnWhatsapp, FormPqrs } from '@components/index'

import { IFooterData, ILogoData, IContactContent } from '@typed/index'

import {
  ContainerPqrs,
  ContentBackHome,
  ContentFormPqrs
} from './styledComponents'

interface IPropsData {
  numberWp: string
  logo: ILogoData
  contact: IContactContent
  footer: IFooterData
}

export default function Pqrs(props: IPropsData) {
  const { logo, footer, numberWp, contact } = props
  return (
    <DefaultLayout
      title="IENEL - Home"
      logo={logo}
      footer={footer}
      isHeaderMenu={false}>
      <ContainerPqrs>
        <ContentBackHome>
          <Link href="/">
            <FaArrowLeft size={18} />
            Ir al Home
          </Link>
        </ContentBackHome>

        <ContentFormPqrs>
          <FormPqrs dataContact={contact} />
        </ContentFormPqrs>
      </ContainerPqrs>

      <BtnWhatsapp number={numberWp} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  return {
    props: {
      logo: await getLogoContent(),
      numberWp: await getNumberWpContent(),
      contact: await getDataContact(),
      footer: await getFooterContent()
    }
  }
}
