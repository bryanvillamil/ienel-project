import React from 'react'
import {
  Animate,
  Loading,
  ContainCenter,
  CardProject,
  Title,
  Paragraph
} from '@components/index'
import {
  ContentProjects,
  ContainProjects,
  ColumnProjects,
  BoxProjectsInfo
} from './styledComponents'
import { IPropsProject } from '@/typed/projects'
import 'animate.css'

interface IPropsData {
  description?: string
  items?: [IPropsProject]
}

export const Projects = ({ dataProjects }: { dataProjects: IPropsData }) => {
  const items: any[] = dataProjects?.items ?? []
  const dataItems: IPropsProject[] = items ?? []

  return (
    <ContentProjects name="projects" id="projects">
      {dataProjects === null ? (
        <Loading />
      ) : dataProjects != null ? (
        <ContainCenter>
          <Animate
            entranceAnimation="animate__backInLeft"
            exitAnimation="animate__backOutLeft">
            <ContainProjects>
              <ColumnProjects>
                <BoxProjectsInfo>
                  <Title
                    type={2}
                    text="Nuestros Proyectos"
                    color="#000"
                    align="left"
                  />
                  <Paragraph
                    text=" En esta sección, te presentamos algunos de nuestros
                    proyectos más destacados y exitosos. Desde pequeñas empresas
                    hasta grandes corporaciones, hemos tenido el privilegio de
                    trabajar con una amplia variedad de clientes y sectores.
                    Explora nuestra cartera de proyectos para obtener una visión
                    más detallada de nuestro trabajo y ver cómo hemos ayudado a
                    nuestros clientes a alcanzar sus objetivos."
                    size={12}
                    color="#333"
                    align="start"
                    opacity={1}
                    margin={4}
                    paddingX={0}
                    paddingY={3}
                  />
                </BoxProjectsInfo>

                {dataItems[1] != null && <CardProject item={dataItems[1]} />}
                {dataItems[3] != null && <CardProject item={dataItems[3]} />}
              </ColumnProjects>

              <ColumnProjects>
                {dataItems[0] != null && <CardProject item={dataItems[0]} />}
                {dataItems[2] != null && <CardProject item={dataItems[2]} />}
              </ColumnProjects>
            </ContainProjects>
          </Animate>
        </ContainCenter>
      ) : null}
    </ContentProjects>
  )
}
