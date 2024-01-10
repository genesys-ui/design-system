import styled from 'styled-components';

import { DESIGN_TOKEN_LIST_COLORS } from '../constants';

import { StyledDesignTokensRow } from '../styled/StyledDesignTokensRow';

export const StyledDesignTokensThead = styled.thead`
  font-weight: bold;
  color: ${DESIGN_TOKEN_LIST_COLORS.TEXT_HEADING};

  ${StyledDesignTokensRow} {
    border-top: none;
  }
`;
