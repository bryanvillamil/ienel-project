import { gql } from '@apollo/client';

export const GET_ALL_PROYECTS_QUERY = gql`
  query GetAllProyects {
    home(id: "3koGax7i3OW9oMqDO6iml8") {
      tituloSeccionProyectos
      descriptionSectionProyects {
        json
      }
      proyectosCollection {
        items {
          ... on SeccionProyectosInternaDeProyectos {
            nombreDelProyecto
            imagenDelProyectoCollection {
              items {
                url
                title
                description
              }
            }
            descripcionDelProyecto {
              json
            }
          }
        }
      }
    }
  }
`;
