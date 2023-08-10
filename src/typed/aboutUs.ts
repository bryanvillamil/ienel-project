interface IValues {
  title: string
  description: string
}

export interface IAboutData {
  quienesSomos: {
    titleMision: string
    descMision: string
    titleVision: string
    descVision: string
    imgPartners: {
      title: string
      url: string
    }
  }
  valores: {
    title: string
    values: [IValues]
    imgTeam: {
      title: string
      url: string
    }
  }
}