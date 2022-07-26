import { FiArrowRight } from 'react-icons/fi';
import { Separator, Subtitle } from '../../../components/Basepage';
import { Fade } from 'react-awesome-reveal';
import Button from '../../../components/Button';
import * as C from './styles';
import { useCallback, useState } from 'react';
import { results, ResultsProps } from './results-data';

function Results() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [array, setArray] = useState<ResultsProps[]>(results);
  const len = array.length - 1;

  const handleNextIndex = useCallback(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }, [len, activeIndex]);

  return (
    <C.Container>
      <Fade direction="up" duration={1000} triggerOnce>
        <C.Content>
          <C.Title>
            Veja os resultados <br /> que você pode esperar!
          </C.Title>

          <C.WeekContent>
            <Separator>
              {array.map(({ week }, index) => (
                <C.Grouper key={index} active={index === activeIndex}>
                  <h2>0{week}</h2>
                  <Subtitle style={{ marginTop: 6 }}>Semana</Subtitle>
                </C.Grouper>
              ))}
            </Separator>

            <C.WeekResult>
              {array.map(({ aboutWeek }, index) => (
                <C.Grouper key={index} active={index === activeIndex}>
                  <Subtitle key={index} style={{ color: '#232326' }}>
                    {aboutWeek}
                  </Subtitle>
                </C.Grouper>
              ))}

              <Button
                size="medium"
                colorStyle="golden"
                onClick={handleNextIndex}
              >
                Proxima <FiArrowRight size={18} color="#FFFFFF" />
              </Button>
            </C.WeekResult>
          </C.WeekContent>
        </C.Content>
      </Fade>
    </C.Container>
  );
}

export default Results;
