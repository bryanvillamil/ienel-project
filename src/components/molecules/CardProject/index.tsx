import React from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'
import { Title, Paragraph } from '@components/index'
import {
  BoxProyects,
  Card,
  CardImage,
  CardBody,
  TitleCard
} from './styledComponents'
import { IPropsProject } from '@/typed/projects'

export const CardProject = ({ item }: { item: IPropsProject }) => {
  const {
    nombreDelProyecto,
    descripcionDelProyecto: {
      json: {
        content: [firstText]
      }
    },
    imagenDelProyectoCollection: {
      items: [firstItem]
    }
  } = item

  const alertTest = (title: string, description: string) => {
    void Swal.fire({
      title,
      text: description,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    })
  }
  console.log('item =>', item)

  return (
    <BoxProyects
      onClick={() => alertTest(nombreDelProyecto, firstText.content[0].value)}>
      <Card>
        <CardImage>
          <Image
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            src={firstItem.url}
            alt={firstItem.title}
            width={100}
            height={100}
          />
        </CardImage>
        <CardBody>
          <Paragraph
            text={firstText.content[0].value}
            size={14}
            color="#333"
            align="start"
            opacity={1}
            margin={4}
            paddingX={12}
            paddingY={12}
          />
          <TitleCard>
            <Title
              type={3}
              text={nombreDelProyecto}
              color="white"
              align="start"
            />
          </TitleCard>
        </CardBody>
      </Card>
    </BoxProyects>
  )
}
