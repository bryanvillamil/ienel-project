import { gql } from '@apollo/client';

export const GET_LOGO_QUERY = gql`
  query GetLogo {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      logoPrincipal {
        url
        title
        description
        width
        height
      }
    }
  }
`;