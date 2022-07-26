import styled, { css } from 'styled-components';
import { appearFromLeft } from '../../../components/Basepage';

interface ContentProps {
  active?: boolean;
}

export const Container = styled.div`
  height: 100%;
  padding: 60px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
`;

export const AnimationContainer = styled.div<ContentProps>`
  width: 500px;
  height: 250px;

  animation: ${appearFromLeft} 1s;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;
