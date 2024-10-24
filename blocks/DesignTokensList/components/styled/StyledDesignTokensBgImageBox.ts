import styled, { css } from 'styled-components';

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export const StyledDesignTokensBgImageBox = styled(StyledDesignTokensBox)`
  ${({ $bgImage }) => {
    return css`
      position: absolute;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.8rem;
      background-image: ${$bgImage};
    `;
  }}
`;
