import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem 5.6rem;

  background-color: #f2f2f2;
  color: #232326;

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

export const ImageContainer = styled.div`
  display: flex;
  gap: 24px;
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
  padding: 1rem 0;

  border-top: 1px solid #d9d9d9;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  color: #8c8c8c;
`;

export const Text = styled.p``;
