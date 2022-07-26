import Image from 'next/image';

import Button from '../../../components/Button';
import { Fade } from 'react-awesome-reveal';

import {
  ButtonsContainer,
  Subtitle,
  Title,
} from '../../../components/Basepage';

import * as C from './styles';
import { useCallback, useState } from 'react';
import { MethodsProps, methods } from './methods-data';

function MethodStages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [array, setArray] = useState<MethodsProps[]>(methods);
  const len = array.length - 1;

  const handleNextIndex = useCallback(() => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  }, [len, activeIndex]);

  const handlePreviousIndex = useCallback(() => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }, [len, activeIndex]);

  return (
    <C.Container>
      <C.Content>
        {array.map(({ phase, title, content }: MethodsProps, index) => (
          <C.AnimationContainer key={index} active={index === activeIndex}>
            <Fade direction="up" duration={1000} triggerOnce key={index}>
              <Button size="medium" colorStyle="filled">
                {phase}
              </Button>

              <Title>{title}</Title>
              <Subtitle>{content}</Subtitle>
            </Fade>
          </C.AnimationContainer>
        ))}

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
      </C.Content>

      <Image src="/fit-girl-eating-apple.png" alt="" width="700" height="480" />
    </C.Container>
  );
}

export default MethodStages;
