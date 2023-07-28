import { gql } from '@apollo/client';

export const GET_FOOTER_QUERY = gql`
  query GetFooter {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      numerosDeContacto 
      redesSocialesCollection {
        total
        items{ 
          ... on ContenidosTransversales {
            titulo 
            enlacePrincipal
            nombreIcono
          }
        }
      }
    }
  }
`;