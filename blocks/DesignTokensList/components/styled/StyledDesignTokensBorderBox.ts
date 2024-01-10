import styled, { css } from 'styled-components';

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export const StyledDesignTokensBorderBox = styled(StyledDesignTokensBox)`
  ${({
    border,
    borderColor = 'gray',
    borderSize = '0.2rem',
    borderStyle = 'solid',
  }) => css`
    border: ${border ? border : `${borderStyle} ${borderSize} ${borderColor}`};
  `}
`;
