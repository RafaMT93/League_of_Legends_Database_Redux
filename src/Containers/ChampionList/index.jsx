import React from 'react';
import { Select } from '../../Components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVersion, fetchVersionData } from '../../Redux/Modules/Version';
import { Wrapper } from './styled';
import Frame from '../../Components/Frame';

const ChampionList = ({ version, setValue }) => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ leagueOfLegends }) => leagueOfLegends);

  React.useEffect(() => {
    dispatch(fetchVersion(version));
  }, [dispatch, version]);

  React.useEffect(() => {
    dispatch(fetchVersionData());
  }, [dispatch]);

  if (list.data)
    return (
      <section>
        <Select
          name={'Versão'}
          id={version}
          value={version}
          setValue={setValue}
        />
        <Wrapper>
          {Object.keys(list.data.data).map((championName) => {
            return (
              <Frame
                name={list.data.data[championName].name}
                key={list.data.data[championName].id + ' - ' + version}
                image={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${list.data.data[championName].id}.png`}
                id={list.data.data[championName].id}
                tag={list.data.data[championName].tags}
                type={'Champion'}
                width={'8rem'}
                height={'8rem'}
              />
            );
          })}
        </Wrapper>
      </section>
    );
  return null;
};

export default ChampionList;
