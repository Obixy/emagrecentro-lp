import styled, { css } from 'styled-components';
import { appearFromLeft, appearFromTop } from '../../../components/Basepage';

interface ContentProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 40px 0;

  animation: ${appearFromTop} 1s;
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 48px;

  border-radius: 50%;
  background: #c6d3e5;
`;

export const Opinion = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
`;

export const Title = styled.h3``;

export const Subtitle = styled.p`
  color: #8c8c8c;
`;

export const Group = styled.div<ContentProps>`
  width: 100%;

  display: flex;
  flex-flow: column;
  gap: 6px;
  animation: ${appearFromLeft} 1s;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;
