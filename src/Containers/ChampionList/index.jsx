import React from 'react';
import { Frame } from '../../Components';
import { Wrapper } from './styled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchVersion } from '../../Redux/Modules/Version';

const ChampionList = ({ version }) => {
  const { data } = useSelector((state) => state.version);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchVersion(version));
  }, [version, dispatch]);

  if (data)
    return (
      <section>
        <Wrapper>
          {Object.keys(data.data).map((championName) => {
            return (
              <Frame
                name={data.data[championName].name}
                key={data.data[championName].id + ' - ' + version}
                image={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.data[championName].id}.png`}
                id={data.data[championName].id}
                tag={data.data[championName].tags}
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
