import React from 'react';

import Info from './Info';
import Lore from './Lore';
import Skills from './Skills';
import Skins from './Skins';

import { WrapperChampionDiv } from './styled';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChampion } from '../../Redux/Modules/Version';

const Champion = ({ version }) => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  React.useEffect(() => {
    dispatch(fetchChampion(version, slug));
  }, [version, slug, dispatch]);

  const { data } = useSelector(
    ({ leagueOfLegends }) => leagueOfLegends.champions,
  );

  if (data)
    return (
      <>
        <WrapperChampionDiv
          image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${slug}_0.jpg`}
        >
          <Info
            attack={data.data[slug].info.attack}
            defense={data.data[slug].info.defense}
            difficulty={data.data[slug].info.difficulty}
            magic={data.data[slug].info.magic}
            tags={data.data[slug].tags}
            partype={data.data[slug].partype}
          />
        </WrapperChampionDiv>
        <Lore
          name={data.data[slug].name}
          title={data.data[slug].title}
          lore={data.data[slug].lore}
          allytips={data.data[slug].allytips}
          enemytips={data.data[slug].enemytips}
          armor={data.data[slug].stats.armor}
          armorperlevel={data.data[slug].stats.armorperlevel}
          attackdamage={data.data[slug].stats.attackdamage}
          attackdamageperlevel={data.data[slug].stats.attackdamageperlevel}
          attackrange={data.data[slug].stats.attackrange}
          attackspeed={data.data[slug].stats.attackspeed}
          attackspeedperlevel={data.data[slug].stats.attackspeedperlevel}
          crit={data.data[slug].stats.crit}
          critperlevel={data.data[slug].stats.critperlevel}
          hp={data.data[slug].stats.hp}
          hpperlevel={data.data[slug].stats.hpperlevel}
          hpregen={data.data[slug].stats.hpregen}
          hpregenperlevel={data.data[slug].stats.hpregenperlevel}
          movespeed={data.data[slug].stats.movespeed}
          mp={data.data[slug].stats.mp}
          mpperlevel={data.data[slug].stats.mpperlevel}
          mpregen={data.data[slug].stats.mpregen}
          mpregenperlevel={data.data[slug].stats.mpregenperlevel}
          spellblock={data.data[slug].stats.spellblock}
          spellblockperlevel={data.data[slug].stats.spellblockperlevel}
        />
        <Skills
          version={version}
          passiveImg={`http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${data.data[slug].passive.image.full}`}
          altPassive={data.data[slug].passive.name}
          titlePassive={data.data[slug].passive.name}
          passiveDescription={data.data[slug].passive.description}
          spells={data.data[slug].spells}
          partype={data.data[slug].partype}
        />

        {data.data[slug].skins.length > 0 ? (
          <Skins
            skins={data.data[slug].skins}
            name={data.data[slug].name}
            id={data.data[slug].id}
          />
        ) : (
          <></>
        )}
      </>
    );
  return null;
};

export default Champion;
