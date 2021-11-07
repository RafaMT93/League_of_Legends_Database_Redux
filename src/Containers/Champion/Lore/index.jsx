import React from 'react';
import { Row, Col } from 'antd';

import {
  WrapperChampionH1Name,
  WrapperChampionTitle,
  WrapperContent,
  WrapperRowStats,
  WrapperStats,
  WrapperH1Stats,
  WrapperLore,
  WrapperH1,
  WrapperTips,
} from './styled';

const Lore = ({
  name,
  title,
  lore,
  allytips,
  enemytips,
  armor,
  armorperlevel,
  attackdamage,
  attackdamageperlevel,
  attackrange,
  attackspeed,
  attackspeedperlevel,
  crit,
  critperlevel,
  hp,
  hpperlevel,
  hpregen,
  hpregenperlevel,
  movespeed,
  mp,
  mpperlevel,
  mpregen,
  mpregenperlevel,
  spellblock,
  spellblockperlevel,
}) => {
  return (
    <WrapperContent>
      <WrapperChampionH1Name>{name}</WrapperChampionH1Name>
      <WrapperChampionTitle>{title}</WrapperChampionTitle>

      <WrapperRowStats gutter={[16, 24]}>
        <Col span={7}></Col>
        <Col span={10} xs={20}>
          <WrapperStats>
            <WrapperH1Stats>Estatísticas</WrapperH1Stats>
            <Row gutter={[8, 8]}>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Armor:</b> {armor}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Armor p/ lvl:</b> {armorperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>AD:</b> {attackdamage}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>AD p/ lvl:</b> {attackdamageperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Range:</b> {attackrange}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Attack Speed:</b> {attackspeed}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Attack Speed p/ lvl:</b> {attackspeedperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Crit:</b> {crit}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Crit p/ lvl:</b> {critperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>HP:</b> {hp}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>HP p/ lvl:</b> {hpperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>HP Regen:</b> {hpregen}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>HP Regen p/ lvl:</b> {hpregenperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Ms:</b> {movespeed}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Mana:</b> {mp}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Mana p/ lvl:</b> {mpperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Mana Regen:</b> {mpregen}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Mana Regen p/ lvl:</b> {mpregenperlevel}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Spellblock:</b> {spellblock}
              </Col>
              <Col span={4} xs={24} sm={12} md={4}>
                <b>Spellblock p/ lvl:</b> {spellblockperlevel}
              </Col>
            </Row>
          </WrapperStats>
        </Col>
        <Col span={7}></Col>
      </WrapperRowStats>

      <WrapperLore>{lore}</WrapperLore>
      <WrapperTips gutter={[16, 24]}>
        <Col span={12}>
          <WrapperH1>Dicas para jogar de {name}</WrapperH1>
          <ul>
            {allytips.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </Col>
        <Col span={12}>
          <WrapperH1>Dicas para jogar contra {name}</WrapperH1>
          <ul>
            {enemytips.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </Col>
      </WrapperTips>
    </WrapperContent>
  );
};

export default Lore;
