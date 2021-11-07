import styled from 'styled-components';

export const CarouselImage = styled.img`
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 700px;
    height: 400px;
  }
  @media (max-width: 1024px) {
    width: 375px;
    height: 190px;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 190px;
  }
  @media (max-width: 425px) {
    width: 150px;
    height: 100px;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ChampionSkinH2 = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.5);
  text-align: center;
  font-weight: bold;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
`;

export const ChampionSkinParagraph = styled.p`
  text-align: center;
  padding-bottom: 0.875rem;
`;
