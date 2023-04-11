import styled from 'styled-components'

export const ContentSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .slick {
    &-prev,
    &-next {
      z-index: 9;
      height: 40px;
      width: 40px;
      top: 40%;
      &:before {
        font-size: 35px;
      }
    }
    &-prev {
      left: 35px;
    }
    &-next {
      right: 35px;
    }

    &-slider,
    &-list,
    &-track {
      height: 100%;
      & > div {
        height: 100%;
        & > div {
          height: 100%; 
        }
        img {
          width: 100%;
          height: 100%;
          aspect-ratio: auto;
        }
      }
    }
  }
`

export const CustomArrow = styled.svg`
  font-size: 35px;
  position: absolute;
  top: 40%;
  line-height: 0;
  padding: 0;
  transform: scale(1);
  transition: 0.3s all linear;
  cursor: pointer;
  color: #fff;
  svg {
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 1));
  }
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`
