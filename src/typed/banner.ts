export interface IBanner {
  tituloPrincipal: string
  imgenesPrincipalesCollection: {
    items: [
      {
        title: string
        description: string
        url: string
        height: number
        width: number
      }
    ]
  }
}

export interface IBannerData {
  banners: IBanner[];
  description: string;
  titulo: string;
}