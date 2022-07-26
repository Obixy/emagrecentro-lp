import { useEffect, useState } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { OpinionProps, opinions } from './opinions-data';
import * as C from './styles';

function Options() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [array, setArray] = useState<OpinionProps[]>(opinions);
  const len = array.length - 1;

  useEffect(() => {
    (function handleCount() {
      setTimeout(() => {
        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
      }, 4000);
    })();
  }, [len, activeIndex]);

  return (
    <C.Container>
      <C.Icon>
        <RiDoubleQuotesL size={32} color="#ACA474" />
      </C.Icon>

      <C.Opinion>
        {array.map(({ name, opinion }, index) => (
          <C.Group key={index} active={index === activeIndex}>
            <C.Title>{name}</C.Title>
            <C.Subtitle>{opinion}</C.Subtitle>
          </C.Group>
        ))}
      </C.Opinion>
    </C.Container>
  );
}

export default Options;
