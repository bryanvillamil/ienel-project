import client from '@graphql/client'
import { GET_FOOTER_QUERY } from '@queries/footer'

export const getFooterContent = async () => {
  const { data } = await client.query({
    query: GET_FOOTER_QUERY
  });

  return {
    numberContacts: data?.home?.numerosDeContacto,
    socialNetworks: data?.home?.redesSocialesCollection?.items
  }    
}