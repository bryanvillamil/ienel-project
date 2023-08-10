import { gql } from '@apollo/client';

export const GET_ABOUT_US_QUERY = gql`
  query GetAbouUs {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      valoresCorporativosCollection {
        items {
          ... on ValoresCorporativos {
            tituloPrincipal
            valores
            imageTeam {
              title
              url
            }
          }
        }
      }
    
      quienesSomosCollection {
        total
        items {
          ... on ContentInfo {
            titlemision
            descriptionmision {
              json
            }
            titlevision
            descriptionvision {
              json
            }
            imagepatners {
              title
              url
            }
          }
        }
      }
    }
  }
`;
