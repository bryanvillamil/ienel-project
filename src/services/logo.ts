import client from '@graphql/client'
import { GET_LOGO_QUERY } from '@queries/logo'

export const getLogoContent = async () => {
  const { data } = await client.query({
    query: GET_LOGO_QUERY
  });

  // const { home } = data ?? {}
  // const { proyectosCollection } = home ?? {}
  // const items: any[] = proyectosCollection?.items ?? []
  // const dataItems: IPropsProject[] = items ?? []
  return {
    dataLogo: data?.home?.logoPrincipal
  }
}