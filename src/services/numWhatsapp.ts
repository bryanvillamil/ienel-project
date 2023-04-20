import client from '@graphql/client'
import { GET_NUMBER_WHATSAPP_QUERY } from '@queries/numWhatsapp'

export const getNumberWpContent = async () => {
  const { data } = await client.query({
    query: GET_NUMBER_WHATSAPP_QUERY
  });

  return {
    number: data?.home?.numeroDeWhatsApp
  }
}