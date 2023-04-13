import client from '@graphql/client'
import { GET_ALL_PROYECTS_QUERY } from '@queries/products'

export const getProjectsContent = async () => {
  const { data } = await client.query({
    query: GET_ALL_PROYECTS_QUERY
  });

  // const { home } = data ?? {}
  // const { proyectosCollection } = home ?? {}
  // const items: any[] = proyectosCollection?.items ?? []
  // const dataItems: IPropsProject[] = items ?? []
  return {
    description: data?.home?.informacionProyectos.json.content[0].content[0].value,
    items: data?.home?.proyectosCollection?.items
  }
}