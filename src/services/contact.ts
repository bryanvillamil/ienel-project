import client from '@graphql/client'
import { GET_CONTACT_QUERY } from '@queries/contact'

export const getDataContact = async () => {
  const { data } = await client.query({
    query: GET_CONTACT_QUERY
  });
  
  return data?.home?.contactoCollection?.items[0]
  
}