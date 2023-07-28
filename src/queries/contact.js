import { gql } from '@apollo/client';

export const GET_CONTACT_QUERY = gql`
  query GetContact {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
    contactoCollection {
      total
      items {
        ... on ContenidosTransversales {
          titulo
          correo
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