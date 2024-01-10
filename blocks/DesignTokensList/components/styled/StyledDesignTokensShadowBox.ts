import styled, { css } from 'styled-components';

import { StyledDesignTokensBox } from './StyledDesignTokensBox.js';

export const StyledDesignTokensShadowBox = styled(StyledDesignTokensBox)`
  ${({ boxShadow }) => css`
    box-shadow: ${boxShadow};
  `}
`;
