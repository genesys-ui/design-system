import styled, { css } from 'styled-components';

import { DESIGN_TOKEN_LIST_COLORS } from '../constants';

export const StyledDesignTokensCell = styled.td`
  padding: 1.2rem 1.6rem;
  border: none;
  vertical-align: middle;

  ${({ align }) => css`
    text-align: ${align || 'left'};
  `}

  strong {
    color: ${DESIGN_TOKEN_LIST_COLORS.TEXT_HEADING};
    font-family: 'Mono Font', monospace;
    font-weight: normal;
  }
`;
