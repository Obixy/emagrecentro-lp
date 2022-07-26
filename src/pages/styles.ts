import styled, { css } from 'styled-components';
import { appearFromLeft } from '../components/Basepage';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  background-image: url('/background-lines.png');
`;

export const MainContent = styled.main`
  width: 76%;
  height: 100%;

  padding: 60px;

  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MainContentHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;

  &:nth-child(2) {
    margin-left: 2rem;
  }

  a {
    color: #232326;
  }
`;

export const MathodStagesContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  animation: ${appearFromLeft} 1s;
`;

export const DiplomaStage = styled.div`
  width: 100%;
  height: 100%;

  background: #214b8a;

  display: flex;
  justify-content: space-between;
  padding: 70px 60px;
  padding-bottom: 0;
`;

export const DiplomaContainer = styled.div`
  width: 600px;
  height: 360px;

  padding: 40px;
  padding-bottom: 60px;

  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: #ffffff;
  position: relative;

  background-image: url('/background-lines.png');
`;

export const ContentAboutDiploma = styled.div`
  width: 500px;
`;

export const DiplomaTitle = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 33px;

  color: #232326;
`;

export const DiplomaSubtitle = styled.p`
  font-size: 16px;
  line-height: 16px;

  margin-top: 20px;

  color: #8c8c8c;
`;

export const AbsoluteImageDiploma = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`;
