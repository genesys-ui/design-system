import * as React from 'react';

import { StyledDesignTokensColorBox } from './styled';

type Props = {
  color: string;
};

export const DesignTokensColorBox: React.FC<Props> = ({ color }) => (
  <StyledDesignTokensColorBox color={color}>
    Text color
  </StyledDesignTokensColorBox>
);
