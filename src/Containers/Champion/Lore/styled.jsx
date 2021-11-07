import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperChampionH1Name = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 2);
  font-weight: bold;
  text-align: center;

  &::after {
    content: ' ';
    width: 350px;
    height: 0.125rem;
    background-color: #333;
    position: relative;
    display: block;
    margin: 2px auto;
  }
  @media (max-width: 380px) {
    &::after {
      width: 100px;
    }
  }
`;
export const WrapperChampionTitle = styled.p`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.5);
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
`;
export const WrapperContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 0.313rem;
  margin: 2rem;
`;
export const WrapperRowStats = styled(Row)`
  display: flex;
  justify-content: center;
`;
export const WrapperH1Stats = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.5);
  font-weight: bold;
`;
export const WrapperStats = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 1px 4px 13px 10px rgba(0, 0, 0, 0.8);
  height: 200px;
  width: 100%;
  padding: 0.5rem;

  @media (max-width: 1515px) {
    height: 300px;
  }
  @media (max-width: 900px) {
    height: 450px;
  }
  @media (max-width: 690px) {
    height: 500px;
  }
  @media (max-width: 580px) {
    height: 700px;
  }
`;
export const WrapperLore = styled.section`
  margin-top: 2rem;
`;
export const WrapperH1 = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.2);
  font-weight: bold;
`;
export const WrapperTips = styled(Row)`
  margin-top: 2rem;

  ul {
    margin-top: 1rem;
  }
`;
