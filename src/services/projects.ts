import client from '@graphql/client'
import { GET_ALL_PROYECTS_QUERY } from '@queries/projects'

export const getProjectsContent = async () => {
  const { data } = await client.query({
    query: GET_ALL_PROYECTS_QUERY
  });
  
  return {
    titleProyects: data?.home?.tituloSeccionProyectos,
    descriptionProyects: data?.home?.descriptionSectionProyects?.json.content[0].content[0].value,
    items: data?.home?.proyectosCollection?.items,
  }
}