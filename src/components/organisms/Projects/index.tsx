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
  descriptionProyects?: string
  titleProyects?: string
  description?: string
  items?: [IPropsProject]
}

export const Projects = ({ dataProjects }: { dataProjects: IPropsData }) => {
  const { descriptionProyects, titleProyects } = dataProjects
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
                    text={titleProyects || ''}
                    color="#1B1918"
                    align="left"
                  />
                  <Paragraph
                    text={descriptionProyects || ''}
                    size={12}
                    color="#333"
                    align="justify"
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
