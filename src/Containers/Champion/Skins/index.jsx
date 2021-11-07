import React from 'react';
import Slider from 'react-slick';
import Modal from '../../../Components/Modal';
import {
  CarouselImage,
  ChampionSkinH2,
  ChampionSkinParagraph,
  ModalImage,
} from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skins = ({ skins, name, id }) => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const [clickImg, setClickImg] = React.useState(null);

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
  };

  var settings2 = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
  };

  function handleOpenModal(clickImg) {
    setClickImg(clickImg);
    setModalOpened(true);
  }

  return (
    <>
      <div>
        <ChampionSkinH2>Skins</ChampionSkinH2>

        <ChampionSkinParagraph>
          Abaixo você pode conferir todas as skins do campeão {name}
        </ChampionSkinParagraph>

        {skins.length > 2 ? (
          <Slider {...settings}>
            {skins.map((x, index) => {
              return (
                <div key={index}>
                  <CarouselImage
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${x.num}.jpg`}
                    alt={x.name}
                    title={x.name}
                    onClick={() =>
                      handleOpenModal(
                        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${x.num}.jpg`,
                      )
                    }
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
          <Slider {...settings2}>
            {skins.map((x, index) => {
              return (
                <div key={index}>
                  <CarouselImage
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${x.num}.jpg`}
                    alt={x.name}
                    title={x.name}
                    onClick={() =>
                      handleOpenModal(
                        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${x.num}.jpg`,
                      )
                    }
                  />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalImage src={clickImg} />
      </Modal>
    </>
  );
};

export default Skins;
