import styled from 'styled-components';
import { Col } from 'antd';

export const WrapperInfo = styled(Col)`
  position: relative;
  left: 5%;
  top: 50px;
  display: block;
  width: 150px;
  height: 100px;
`;

export const WrapperInfoDetails = styled(Col)`
  position: relative;
  right: 10%;
  top: 50px;
  display: block;

  @media (max-width: 900px) {
    right: 50px;
    margin: auto;
  }
`;

export const WrapperInfoDetailsInRight = styled(Col)`
  text-align: right;
  position: relative;
  right: 10%;
  top: 50px;
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`;
