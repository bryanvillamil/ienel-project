import client from '@graphql/client'
import { GET_ABOUT_US_QUERY } from '@queries/aboutUs'

export const getAboutUsContent = async () => {
  const { data } = await client.query({
    query: GET_ABOUT_US_QUERY
  });  

  const queryQSSort = data?.home?.quienesSomosCollection?.items[0];
  const queryVSort = data?.home?.valoresCorporativosCollection?.items[0];  

  return {
    quienesSomos: {
      titleMision: queryQSSort.titlemision,
      descMision: queryQSSort.descriptionmision.json.content[0].content[0].value,
      titleVision: queryQSSort.titlevision,
      descVision: queryQSSort.descriptionvision.json.content[0].content[0].value,
      imgPartners: {
        title: queryQSSort.imagepatners.title,
        url: queryQSSort.imagepatners.url,
      },
    },
    valores: {
      title: queryVSort.tituloPrincipal,
      values: queryVSort.valores,
      imgTeam: {
        title: queryVSort.imageTeam.title,
        url: queryVSort.imageTeam.url
      }
    },
  }
}