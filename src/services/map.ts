import client from '@graphql/client'
import { GET_MAP_QUERY } from '@queries/map'

export const getMapContent = async () => {
  const { data } = await client.query({
    query: GET_MAP_QUERY
  });

  return {
    apiKeyMap: data?.home?.apiKeyGoogle,
    coordenadasGoogle: data?.home?.coordenadasGoogle
  }    
}