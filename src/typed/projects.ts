import { IDescriptionContent } from '@typed/typesDataContentful'

export interface IPropsProject {
  nombreDelProyecto: string
  descripcionDelProyecto: IDescriptionContent
  slug: string
  imagenDelProyectoCollection: {
    items: [
      {
        url: string
        title: string
      }
    ]
  }
}
