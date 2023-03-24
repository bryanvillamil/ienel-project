import { ContentLocation } from './styledComponents'
import React from 'react'
import { Animate } from '@components/molecules/Animate'
import { Test } from './styledComponents'

export const SectionLocation = React.forwardRef((props, ref) => {
    
    return (
        <ContentLocation name='ubicanos' id="location">
            <Animate entranceAnimation="animate__backInDown" exitAnimation="animate__backOutDown">
                <Test>
                    <h2>Testando div de prueba para animacion</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                        aut animi rerum architecto veritatis voluptatem nobis
                        necessitatibus maxime, accusantium similique, sint porro cumque
                        quas modi officiis ullam nesciunt id quibusdam?
                    </p>
                </Test>
            </Animate>
        </ContentLocation>
    )
})
