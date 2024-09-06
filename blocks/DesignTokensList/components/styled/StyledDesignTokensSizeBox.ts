import styled, { css } from 'styled-components';

import { DESIGN_TOKEN_LIST_COLORS } from '../../constants';

import { StyledDesignTokensBox } from './StyledDesignTokensBox.js';

export const StyledDesignTokensSizeBox = styled(StyledDesignTokensBox)`
  ${({ size, borderRadius }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${borderRadius};
      width: ${size};
      height: ${size};
      background-color: ${DESIGN_TOKEN_LIST_COLORS[
        borderRadius ? 'BG_SHAPE' : 'BG_LAYOUT'
      ]};
      font-size: 1.1rem;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: ${DESIGN_TOKEN_LIST_COLORS.TEXT_WEAK};
    `;
  }}
`;
