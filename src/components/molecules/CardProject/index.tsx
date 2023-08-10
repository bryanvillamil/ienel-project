import React, { useState } from 'react'
import Image from 'next/image'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Title, Paragraph, Loading } from '@components/index'
import Carousel from '@components/molecules/Carousel'
import {
  BoxProyect,
  Card,
  CardImage,
  CardBody,
  BoxImageSLider,
  DescriptionSlider
} from './styledComponents'
import { IPropsProject } from '@/typed/projects'

const MySwal = withReactContent(Swal)

const settings = {
  dots: false,
  arrow: true,
  autoplay: true,
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
    imagenDelProyectoCollection
  } = item

  const firstImage = imagenDelProyectoCollection?.items[0]

  const [loading, setLoading] = useState(false)

  const handleShowAlert = () => {
    setLoading(true)

    void MySwal.fire({
      title: nombreDelProyecto,
      text: 'Modal with a custom image.',
      showConfirmButton: false,
      showCloseButton: true,
      width: 800,
      customClass: {
        closeButton: 'swal2-close'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      html: (
        <div>
          {loading && <Loading />}
          {!loading && (
            <>
              <DescriptionSlider>
                {firstText.content[0].value}
              </DescriptionSlider>

              <Carousel settings={settings}>
                {imagenDelProyectoCollection.items.map((item, index) => {
                  return (
                    <BoxImageSLider key={index}>
                      <Image
                        priority
                        style={{
                          width: '100%',
                          objectFit: 'contain'
                        }}
                        src={item.url}
                        alt={item.title}
                        width={1200}
                        height={800}
                        className="imageSlide"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
                      />
                    </BoxImageSLider>
                  )
                })}
              </Carousel>
            </>
          )}
        </div>
      ),
      didOpen: () => {
        setLoading(false)
      }
    })
  }

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
            src={firstImage.url}
            alt={firstImage.title}
            width={1200}
            height={900}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33.3vw"
          />
        </CardImage>

        <CardBody>
          <Title
            type={3}
            text={nombreDelProyecto}
            color="#1B1918"
            align="start"
          />
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
