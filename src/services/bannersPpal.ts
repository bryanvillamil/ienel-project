import client from '@graphql/client'
import { GET_ALL_BANNERSPPAL_QUERY } from '@queries/bannersPpal'

export const getBannersPpalContent = async () => {
  const { data } = await client.query({
    query: GET_ALL_BANNERSPPAL_QUERY
  });

  return {
    titulo: data?.home?.titulo,
    description: data?.home?.metaDescripcion,
    banners: data?.home?.bannerPrincipalCollection.items
  }
}