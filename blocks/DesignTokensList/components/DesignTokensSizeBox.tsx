import * as React from 'react';

import { StyledDesignTokensSizeBox } from './styled';

type Props = {
  borderRadius: string;
  size: string;
};

export const DesignTokensSizeBox: React.FC<Props> = ({
  borderRadius,
  size,
}) => {
  const sizeNumber =
    typeof size !== 'number'
      ? Number(size?.substring(0, size.length - 3))
      : size;
  return (
    <StyledDesignTokensSizeBox
      size={sizeNumber > 6 ? '6.8rem' : size}
      borderRadius={borderRadius}
    >
      {sizeNumber > 6 && 'Bigger'}
    </StyledDesignTokensSizeBox>
  );
};
