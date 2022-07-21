import styled, { css } from 'styled-components';

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

export const BannerContainer = styled.div`
  width: 100%;
  height: 200;
  padding: 0 60px;
`;

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ResultsSection = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100vh;
  padding: 60px;
`;

export const LocalizationSection = styled.div`
  height: 100vh;
  padding: 60px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LocalizationMapContainer = styled.div`
  width: 500px;
  height: 100%;

  background: #d9d9d9;
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

interface DotProps {
  active?: boolean;
}

export const Dot = styled.div<DotProps>`
  padding: 8px;
  background: #c6d3e5;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    css`
      padding: 8px 12px;
      background: #214b8a;
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const VideoInstagramContainer = styled.div`
  width: 300px;
  height: 100%;

  background-color: #d9d9d9;
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

  color: #000000;
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

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  color: #0c0c0c;
  padding: 3rem 5.6rem;

  border-top: 1px solid #d9d9d9;

  svg {
    width: 30px;
    height: 30px;
    path:nth-child(1) {
      fill: #214b8a;
    }
  }
`;

export const AboutBank = styled.p`
  font-size: 14px;
  color: #6e6e6e;
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 32px;
  grid-auto-flow: row;
  grid-template-areas: '. . . . .';
  padding-bottom: 2rem;
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ColumnTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const ColumnText = styled.p`
  font-size: 14px;
  color: #6e6e6e;
`;

export const ColumnLinks = styled.p`
  font-size: 14px;
  color: #6e6e6e;
  transition: color 0.4s;
  &:hover {
    color: #214b8a;
  }
`;

export const DownSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid #d9d9d9;
  font-size: 12px;
  color: #8c8c8c;
`;
