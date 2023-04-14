import styled from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

export const H1 = styled.h1`
  font-size: 34px;
  letter-spacing: 0.3px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  width: 100%;
  padding: 0 1rem;
  ${breakpoint('xs')`
    font-size: 42px;
  `}
  ${breakpoint('md')`
    font-size: 55px;
  `}
  ${breakpoint('xl')`
    font-size: 60px;
  `}
`

export const H2 = styled.h2`
  font-size: 30px;
  line-height: 1.5;
  width: 100%;
  margin: 0;
  ${breakpoint('md')`
    font-size: 30px;
  `}
  ${breakpoint('lg')`
    font-size: 32px;
  `}
  ${breakpoint('xl')`
    font-size: 35px;
  `}
`

export const H3 = styled.h3`
  font-size: 1.9rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
  ${breakpoint('lg')`
    font-size: 16px;
  `}
  ${breakpoint('xl')`
    font-size: 18;
  `}
`

export const H4 = styled.h4`
  font-size: 1.8rem;
  margin: 10px;
  font-weight: 600;
  padding: 20px 10px;
`

export const H5 = styled.h5`
  font-size: 1.7rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
`

export const H6 = styled.h6`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0px;
  padding: 12px;
`
