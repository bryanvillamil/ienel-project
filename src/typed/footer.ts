
interface ISocialNetworks {
  enlacePrincipal: string
  titulo: string
  nombreIcono?: string
}


export interface IFooterData {
  numberContacts: string
  socialNetworks: [ISocialNetworks]
}