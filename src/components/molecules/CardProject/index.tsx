import React from 'react'
import { BoxProyects, Card } from './styledComponents'
import Link from 'next/link'
import { Carousel, Title } from '@components/index'


export const CardProject = ( {items}: any ) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        style: { display: 'flex' },
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    }

    return (
    <> 
        <Carousel settings={settings}>
            { items.map(({item, index}: any) => {
                return (
                    <BoxProyects key={index}>
                        <Card>
                            {/* <Title type={2} text={item} color="black" align="center" ></Title> */}
                            <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                            aut animi rerum architecto veritatis voluptatem nobis
                            necessitatibus maxime, accusantium similique, sint porro cumque
                            quas modi officiis ullam nesciunt id quibusdam?
                            </p>
                            <Link href="/proyecto/1">ir detalle de projecto</Link>
                        </Card>
                    </BoxProyects>
                )
            })}
        </Carousel>
    </>
  )
}