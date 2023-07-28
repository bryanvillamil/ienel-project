import { gql } from '@apollo/client';

export const GET_MAP_QUERY = gql`
  query GetMap {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      apiKeyGoogle
      coordenadasGoogle {
        lat
        lon
      }
    }
  }
`;