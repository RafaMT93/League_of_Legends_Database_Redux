import React from 'react';
import Image from '../../../Components/Image';

import {
  WrapperSkills,
  WrapperSkillsH1,
  WrapperSkillsH2,
  WrapperSkillsDivision,
  WrapperTabs,
  WrapperTabPanel,
} from './styled';
import { TabList, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Skills = ({
  passiveImg,
  altPassive,
  titlePassive,
  passiveDescription,
  spells,
  partype,
  version,
}) => {
  return (
    <WrapperSkills>
      <WrapperSkillsH1>Skills</WrapperSkillsH1>

      <WrapperTabs>
        <TabList>
          <Tab>
            <Image
              src={passiveImg}
              alt={`Imagem da Passiva ${altPassive}`}
              title={titlePassive}
            />
          </Tab>
          {spells.map((x, index) => {
            return (
              <Tab key={index}>
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${x.image.full}`}
                  alt={`Imagem da skill ${x.name}`}
                  title={x.name}
                />
              </Tab>
            );
          })}
        </TabList>

        <WrapperTabPanel>
          <WrapperSkillsDivision>
            <WrapperSkillsH2
              dangerouslySetInnerHTML={{ __html: passiveDescription }}
            />
          </WrapperSkillsDivision>
        </WrapperTabPanel>

        {spells.map((x, index) => {
          return (
            <WrapperTabPanel key={index}>
              <WrapperSkillsDivision>
                <WrapperSkillsH2
                  dangerouslySetInnerHTML={{ __html: x.description }}
                />
                <br />
                <WrapperSkillsH2>
                  <b>Cooldown:</b> {x.cooldown.join(' / ')}
                </WrapperSkillsH2>

                <WrapperSkillsH2>
                  <b>
                    {partype === 'Mana'
                      ? 'Custo de Mana: '
                      : 'Custo de Energia: '}
                  </b>
                  {x.cost.join(' / ')}
                </WrapperSkillsH2>

                <WrapperSkillsH2>
                  <b>Range:</b> {x.range.join(' / ')}
                </WrapperSkillsH2>
              </WrapperSkillsDivision>
            </WrapperTabPanel>
          );
        })}
      </WrapperTabs>
    </WrapperSkills>
  );
};

export default Skills;
