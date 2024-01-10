import * as React from 'react';

import { StyledDesignTokensBgColorBox } from './styled';

type Props = {
  color: string;
};

export const DesignTokensBgColorBox: React.FC<Props> = ({ color }) => (
  <StyledDesignTokensBgColorBox>
    <div style={{ backgroundColor: color }} />
  </StyledDesignTokensBgColorBox>
);
