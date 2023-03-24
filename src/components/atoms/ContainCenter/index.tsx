import { ReactNode } from 'react'
import { Container } from './styledComponents'

export const ContainCenter = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>
}
