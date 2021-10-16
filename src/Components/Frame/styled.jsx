import styled from 'styled-components';
import { Device } from '../../Global/Device';

export const WrapperSection = styled.section`
  display: block;
  text-align: center;
`;

export const WrapperFrame = styled.div.attrs((props) => ({
  style: {
    height: props.height,
    width: props.width,
    backgroundImage: `url(${props.image})`,
    opacity: props.opacity,
  },
}))`
  border: 1px solid #333;
  background-size: cover;
  cursor: pointer;
  @media (${Device.tablet}) {
    height: calc(${({ height }) => height} / 1.5);
    width: calc(${({ width }) => width} / 1.5);
  }
`;

export const WrapperName = styled.h3`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.fonts.fontSize} / 1.5);
  }
`;
