import styled from 'styled-components';
import { Col } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  @media (max-width: 768px) {
    padding: 0.313rem 0.313rem;
  }
`;

export const WrapperFlexImg = styled(Col)`
  display: flex;
  justify-content: center;
  items-align: center;
  padding: 0.313rem 0.313rem;
`;

export const WrapperModalParagraph = styled.p`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 2);
  display: flex;
  justify-content: center;
  items-align: center;
  font-weight: bold;
`;
