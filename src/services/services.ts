import client from '@graphql/client'
import { GET_SERVICES_QUERY } from '@queries/services'

export const getServicesContent = async () => {
  const { data } = await client.query({
    query: GET_SERVICES_QUERY
  });
  
  return {
    dataServices: data?.home?.serviciosCollection?.items
  }
}