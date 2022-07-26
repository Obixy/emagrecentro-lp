import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  size?: 'larger' | 'medium' | 'small';
  colorStyle?: 'plain' | 'golden' | 'tined' | 'filled';
}

const buttonStyleVariations = {
  plain: css`
    background: transparent;
    color: #214b8a;
  `,
  golden: css`
    background: #aca474;
    color: #f2f2f2;
  `,
  tined: css`
    background: #c6d3e5;
    color: #214b8a;
  `,
  filled: css`
    background: #214b8a;
    color: #ffffff;

    &:hover {
      background: ${shade(0.2, '#214b8a')};
    }
  `,
};

const buttonSizeVariations = {
  larger: css`
    padding: 14px 32px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 10px;
  `,
  medium: css`
    padding: 10px 24px;
    border-radius: 20px;
  `,
  small: css`
    padding: 6px 16px;
    border-radius: 30px;
    white-space: nowrap;
  `,
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: background 0.2s;

  ${(props) => buttonSizeVariations[props.size || 'small']}
  ${(props) => buttonStyleVariations[props.colorStyle || 'filled']}
`;
