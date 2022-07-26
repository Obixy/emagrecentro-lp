import { useCallback, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineReload } from 'react-icons/ai';
import { FiBarChart, FiPause, FiVolume2 } from 'react-icons/fi';
import {
  ButtonsContainer,
  Subtitle,
  Title,
} from '../../../components/Basepage';
import Button from '../../../components/Button';
import { results, ResultsProps } from './result-data';
import * as C from './styles';

function ClientResults() {
  const videoRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [array] = useState<ResultsProps[]>(results);
  const len = array.length - 1;

  const handleNextIndex = useCallback(() => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  }, [len, activeIndex]);

  const handlePreviousIndex = useCallback(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }, [len, activeIndex]);

  function handleMuteVideo() {
    videoRef.current.currentTime = 0;
  }

  function handlePauseVideo() {
    videoRef.current.pause();
  }

  return (
    <C.Container>
      <C.ContentAboutResults>
        <Fade direction="up" duration={1000} triggerOnce>
          <FiBarChart size={100} color="#ACA474" />
          <Title>
            Veja os resultados de <br /> algumas clientes!
          </Title>
          <Subtitle>
            Se eles conseguem, você <br /> também pode!
          </Subtitle>
        </Fade>

        <C.CarrouselFooter>
          <C.DotsContainer>
            {array.map((value, index) => (
              <C.Dot key={index} active={index === activeIndex} />
            ))}
          </C.DotsContainer>

          <ButtonsContainer>
            <Button size="medium" onClick={handleNextIndex} colorStyle="tined">
              Anterior
            </Button>

            <Button
              size="medium"
              onClick={handlePreviousIndex}
              colorStyle="tined"
            >
              Proximo
            </Button>
          </ButtonsContainer>
        </C.CarrouselFooter>
      </C.ContentAboutResults>

      {array.map((value, index) => (
        <C.VideoInstagramContainer key={index} active={index === activeIndex}>
          <video
            ref={videoRef}
            autoPlay
            muted
            onClick={handlePauseVideo}
            style={{ height: '100%' }}
            src={value.video}
          />

          <C.FooterInstagram>
            <Button size="small" colorStyle="filled" onClick={handlePauseVideo}>
              <FiPause size={16} />
            </Button>

            <Button size="small" colorStyle="filled">
              <FiVolume2 size={16} />
            </Button>

            <Button size="small" colorStyle="tined" onClick={handleMuteVideo}>
              <AiOutlineReload size={16} />
            </Button>
          </C.FooterInstagram>
        </C.VideoInstagramContainer>
      ))}
    </C.Container>
  );
}

export default ClientResults;
