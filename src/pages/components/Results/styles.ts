import styled, { css } from 'styled-components';
import { appearFromLeft } from '../../../components/Basepage';

interface ContentProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 200;
  padding: 0 60px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 32px;
  line-height: 33px;

  color: #232326;
`;

export const WeekContent = styled.div`
  display: flex;
  gap: 24px;
`;

export const WeekResult = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 6px 0;
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  border-top: 1px solid #d9d9d9;
`;

export const Grouper = styled.div<ContentProps>`
  animation: ${appearFromLeft} 1s;

  ${(props) =>
    !props.active &&
    css`
      display: none;
    `}
`;
