import * as React from 'react';

import { StyledDesignTokensBorderBox } from './styled';

type Props = {
  border: string;
  borderColor: string;
  borderSize: string;
  borderStyle: string;
};

export const DesignTokensBorderBox: React.FC<Props> = ({
  border,
  borderColor,
  borderSize,
  borderStyle,
}) => (
  <StyledDesignTokensBorderBox
    border={border}
    borderColor={borderColor}
    borderSize={borderSize}
    borderStyle={borderStyle}
  />
);
