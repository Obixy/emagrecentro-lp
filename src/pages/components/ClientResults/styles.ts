import styled, { css } from 'styled-components';
import { appearFromRight } from '../../../components/Basepage';

interface DotProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100vh;
  padding: 60px;

  background-image: url('/background-lines-results.png');
  background-size: cover;
`;

export const ContentAboutResults = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const CarrouselFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Dot = styled.div<DotProps>`
  padding: 8px;
  background: #c6d3e5;
  border-radius: 20px;

  transition: all 0.4s;

  ${(props) =>
    props.active &&
    css`
      padding: 8px 12px;
      background: #214b8a;
    `}
`;

export const VideoInstagramContainer = styled.div<DotProps>`
  animation: ${appearFromRight} 1s;
  position: relative;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;

export const FooterInstagram = styled.div`
  display: flex;
  gap: 10px;

  position: absolute;
  right: 10px;
  bottom: 10px;
`;
