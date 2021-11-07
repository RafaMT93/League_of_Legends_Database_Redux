import React from 'react';
import { Row, Col } from 'antd';
import {
  WrapperInfo,
  WrapperInfoDetails,
  WrapperInfoDetailsInRight,
} from './styled';

const Info = ({ attack, defense, difficulty, magic, tags, partype }) => {
  return (
    <Row gutter={[8, 8]}>
      <WrapperInfo span={8}>
        <p>
          <b>Base :</b>
        </p>
        <p>Ataque: {attack}</p>
        <p>Defesa: {defense}</p>
        <p>Dificuldade: {difficulty}</p>
        <p>Magic: {magic}</p>
      </WrapperInfo>
      <WrapperInfoDetails span={8}>
        <Row gutter={[16, 24]}>
          <Col span={12} xs={24}>
            <p>
              <b>Função Principal</b>
            </p>
            <p>
              <i>{tags[0]}</i>
            </p>
          </Col>
          <Col span={12} xs={24}>
            {tags[1] && (
              <p>
                <b>Função Secundária</b>
              </p>
            )}
            <p>
              <i>{tags[1]}</i>
            </p>
          </Col>
        </Row>
      </WrapperInfoDetails>
      <WrapperInfoDetailsInRight span={8}>
        <p>
          <b>Barra Secundária</b>
        </p>
        <p>
          <i>{partype}</i>
        </p>
      </WrapperInfoDetailsInRight>
    </Row>
  );
};

export default Info;
