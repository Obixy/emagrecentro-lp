import styled, { keyframes } from 'styled-components';

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 36px;

  margin-top: 36px;

  color: #232326;
`;

export const Separator = styled.div``;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 20px;

  margin: 16px 0;

  color: #8c8c8c;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
