import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVersion } from '../../Redux/Modules/Version';
import { Wrapper } from './styled';
import Frame from '../../Components/Frame';

const ChampionList = ({ version }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchVersion(version));
  }, [dispatch, version]);

  const { data } = useSelector((state) => state.version);

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
