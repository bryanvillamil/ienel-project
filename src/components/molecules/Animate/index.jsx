import { useRef } from "react"
import { useElementOnViewport } from "@hooks/useElementOnViewport"
import { SectionRef, Content } from "./styledComponents"


export const Animate = ({ children, entranceAnimation, exitAnimation }) => {

    const targetRef = useRef(null)
    const isVisible = useElementOnViewport(targetRef)

    const classList = () => {
        if (isVisible) {
          return `animate__animated ${entranceAnimation}`
        } else {
          return `animate__animated ${exitAnimation}`
        }
      }

    return (
        <>
      <SectionRef ref={targetRef}>
        <Content className={classList()}>
          { children }
        </Content>
      </SectionRef>
        </>
    )
}