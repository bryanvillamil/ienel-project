import { IImagesContent, IDescriptionContent } from '@typed/typesDataContentful'

export interface IContactContent {
  nombreIcono: string
  titulo: string
  descripcionPrincipal: IDescriptionContent
  imgenesPrincipalesCollection: IImagesContent
}

export interface IPropsContactContent {
  dataContactContent: IContactContent[]
  correo?: string

}
