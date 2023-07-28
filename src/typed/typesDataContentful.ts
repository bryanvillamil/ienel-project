export interface IDescriptionContent {
  json: {
    content: [{
      content: [{ value: string }]
    }]
  }
}


export interface IImagesContent {
  items: [
    {
      title: string
      description: string
      url: string
    }
  ]
}