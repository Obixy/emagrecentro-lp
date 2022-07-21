import styled from 'styled-components';

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

export const VideoContainer = styled.div`
  width: 100%;
  height: 370px;

  background-color: #d9d9d9;
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

export const Title = styled.p`
  font-weight: 500;
  font-size: 36px;

  margin-top: 36px;

  color: #232326;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;

  margin: 16px 0;

  color: #8c8c8c;
`;

export const RoundedSpan = styled.span`
  background: #c6d3e5;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;

  color: #214b8a;
`;

export const Button = styled.button`
  padding: 14px 32px;
  background: #214b8a;

  font-size: 18px;
  color: #f2f2f2;
`;

export const ClientOpinion = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 40px 0;
`;

export const OpinionIcon = styled.div`
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
  flex-flow: column;
  gap: 6px;
`;
