// import { useState } from 'react'
import { Title } from '@components/index' // Paragraph
import Image from 'next/image'
import {
  // Card,
  Container,
  // CardContainer,
  // CardFront,
  // CardBack,
  Text,
  BoxImage
} from './styledComponents'
import { IService } from '@typed/services'

interface ServicesProps {
  service: IService
  key: number
}

export const CardService: React.FC<ServicesProps> = ({ service }) => {
  // const [isFlipped, setIsFlipped] = useState(false)

  // const handleCardFlipOver = () => {
  //   setIsFlipped(true)
  // }
  // const handleCardFlipLeave = () => {
  //   setIsFlipped(false)
  // }

  const { imgenesPrincipalesCollection } = service

  return (
    <Container>
      {/* <Card>
        <CardContainer
          onMouseOver={handleCardFlipOver}
          onMouseLeave={handleCardFlipLeave}>
          <CardFront
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}>
            <service.iconoDelServicio size={50} />
          </CardFront>
          <CardBack
            style={{ transform: isFlipped ? 'none' : 'rotateY(180deg)' }}>
            <Paragraph
              text={service.descripcionDelServicio}
              size={14}
              color="black"
              align="center"
            />
          </CardBack>
        </CardContainer>
      </Card> */}

      {imgenesPrincipalesCollection.items.length > 0 && (
        <BoxImage>
          <Image
            src={imgenesPrincipalesCollection.items[0].url}
            fill
            style={{ objectFit: 'contain' }}
            alt={imgenesPrincipalesCollection.items[0].title}
            sizes="(max-width: 640px) 220px, (max-width: 768px) 250px"
          />
        </BoxImage>
      )}
      <Text style={{ marginTop: '15px' }}>
        {/* <Paragraph
          text={service.nombreDelServicio}
          size={16}
          color=""
          align="center"
        /> */}

        <Title
          type={3}
          text={service.tituloPrincipal}
          color=""
          align="center"></Title>
      </Text>
    </Container>
  )
}
