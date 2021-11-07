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

  const { champion } = useSelector((state) => state.version);

  if (champion)
    return (
      <>
        <WrapperChampionDiv
          image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${slug}_0.jpg`}
        >
          <Info
            attack={champion.data[slug].info.attack}
            defense={champion.data[slug].info.defense}
            difficulty={champion.data[slug].info.difficulty}
            magic={champion.data[slug].info.magic}
            tags={champion.data[slug].tags}
            partype={champion.data[slug].partype}
          />
        </WrapperChampionDiv>
        <Lore
          name={champion.data[slug].name}
          title={champion.data[slug].title}
          lore={champion.data[slug].lore}
          allytips={champion.data[slug].allytips}
          enemytips={champion.data[slug].enemytips}
          armor={champion.data[slug].stats.armor}
          armorperlevel={champion.data[slug].stats.armorperlevel}
          attackdamage={champion.data[slug].stats.attackdamage}
          attackdamageperlevel={champion.data[slug].stats.attackdamageperlevel}
          attackrange={champion.data[slug].stats.attackrange}
          attackspeed={champion.data[slug].stats.attackspeed}
          attackspeedperlevel={champion.data[slug].stats.attackspeedperlevel}
          crit={champion.data[slug].stats.crit}
          critperlevel={champion.data[slug].stats.critperlevel}
          hp={champion.data[slug].stats.hp}
          hpperlevel={champion.data[slug].stats.hpperlevel}
          hpregen={champion.data[slug].stats.hpregen}
          hpregenperlevel={champion.data[slug].stats.hpregenperlevel}
          movespeed={champion.data[slug].stats.movespeed}
          mp={champion.data[slug].stats.mp}
          mpperlevel={champion.data[slug].stats.mpperlevel}
          mpregen={champion.data[slug].stats.mpregen}
          mpregenperlevel={champion.data[slug].stats.mpregenperlevel}
          spellblock={champion.data[slug].stats.spellblock}
          spellblockperlevel={champion.data[slug].stats.spellblockperlevel}
        />
        <Skills
          version={version}
          passiveImg={`http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champion.data[slug].passive.image.full}`}
          altPassive={champion.data[slug].passive.name}
          titlePassive={champion.data[slug].passive.name}
          passiveDescription={champion.data[slug].passive.description}
          spells={champion.data[slug].spells}
          partype={champion.data[slug].partype}
        />

        {champion.data[slug].skins.length > 0 ? (
          <Skins
            skins={champion.data[slug].skins}
            name={champion.data[slug].name}
            id={champion.data[slug].id}
          />
        ) : (
          <></>
        )}
      </>
    );
  return null;
};

export default Champion;
