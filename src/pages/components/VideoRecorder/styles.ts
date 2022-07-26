import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const FooterPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;

  height: 8px;
  accent-color: #aca474;

  transition: all 0.3s;
`;
