import { gql } from '@apollo/client';

export const GET_NUMBER_WHATSAPP_QUERY = gql`
  query GetNumberWhatsapp {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      numeroDeWhatsApp 
    }
  }
`;