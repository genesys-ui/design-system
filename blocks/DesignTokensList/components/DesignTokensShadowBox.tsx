import * as React from 'react';

import { StyledDesignTokensShadowBox } from './styled';

type Props = {
  boxShadow: string;
};

export const DesignTokensShadowBox: React.FC<Props> = ({ boxShadow }) => (
  <StyledDesignTokensShadowBox boxShadow={boxShadow} />
);
