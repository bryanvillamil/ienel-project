import { gql } from '@apollo/client';

export const GET_SERVICES_QUERY = gql`
  query GetServices {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      serviciosCollection {
        total
        items {
          ... on ContenidosTransversales {
            tituloPrincipal
            descripcionPrincipal {
              json 
            }
            imgenesPrincipalesCollection {
              skip
              total
              items {
                url
                title
                description
              }
            }
            nombreIcono
          }
        }
      }
    }
  }
`;