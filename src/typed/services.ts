import { IconType } from 'react-icons'
import { IImagesContent } from '@typed/typesDataContentful'

export interface IPPropsService2 {
  id: number
  nombreDelServicio: string
  descripcionDelServicio: string
  iconoDelServicio: IconType
}

export interface IService {
  nombreIcono: string
  tituloPrincipal: string
  imgenesPrincipalesCollection: IImagesContent
  correo?: string
}

export interface IPropsServices {
  dataServices: IService[]
}
