export interface IPropsProject {
  nombreDelProyecto: string
  descripcionDelProyecto: {
    json: {
      content: [
        {
          content: [{ value: string }]
        }
      ]
    }
  }
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
