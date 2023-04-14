import React, { useState } from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Title, Paragraph, Loading } from '@components/index'
import Carousel from '@components/molecules/Carousel'
import { BoxProyect, Card, CardImage, CardBody } from './styledComponents'
import { IPropsProject } from '@/typed/projects'

const MySwal = withReactContent(Swal)

const settings = {
  dots: false,
  arrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

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

  const [loading, setLoading] = useState(false)

  const handleShowAlert = () => {
    setLoading(true)

    void MySwal.fire({
      title: nombreDelProyecto,
      showConfirmButton: false,
      showCloseButton: true,
      width: 800,
      customClass: {
        closeButton: 'swal2-close'
      },
      html: (
        <div>
          {loading && <Loading />}
          {!loading && (
            <Carousel settings={settings}>
              <Image
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src={firstItem.url}
                alt={firstItem.title}
                width={500}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
              />
            </Carousel>
          )}
        </div>
      ),
      didOpen: () => {
        setLoading(false)
      }
    })
  }

  console.log('item =>', item)

  return (
    <BoxProyect
      onClick={
        () => handleShowAlert()
        //  ModalSlider(nombreDelProyecto, firstText.content[0].value)
      }>
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
            width={500}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
          />
        </CardImage>

        <CardBody>
          <Title type={3} text={nombreDelProyecto} color="#000" align="start" />
          <Paragraph
            text={firstText.content[0].value}
            size={12}
            color="#333"
            align="start"
            opacity={1}
            margin={4}
            paddingX={15}
            paddingY={3}
          />
        </CardBody>
      </Card>
    </BoxProyect>
  )
}
