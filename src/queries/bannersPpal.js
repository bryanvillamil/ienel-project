import { gql } from '@apollo/client';

export const GET_ALL_BANNERSPPAL_QUERY = gql`
  query GetAllBannersPpal {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      bannerPrincipalCollection {
        total
        items {
          ... on ContenidosTransversales {
            tituloPrincipal
            enlacePrincipal
            imgenesPrincipalesCollection {
              total
              items {
                url
                title
                description
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
