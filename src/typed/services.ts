import { IconType } from 'react-icons'

export interface IPPropsService2 {
  id: number
  nombreDelServicio: string
  descripcionDelServicio: string
  iconoDelServicio: IconType
}

export interface IService {
  nombreIcono: string
  tituloPrincipal: string
  imgenesPrincipalesCollection: {
    items: [
      {
        title: string
        description: string
        url: string
      }
    ]
  }
}

export interface IPropsServices {
  dataServices: IService[]
}
