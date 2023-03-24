import styled from 'styled-components'

export const ContentSlider = styled.div`
	width: 100%;
  height: 100%;
  position: relative;
  .slick {
    &-prev,
    &-next {
      z-index: 9;
      height: 35px;
      width: 35px;
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
      div {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          aspect-ratio: auto;
        }
      }
    }
  }
`;
