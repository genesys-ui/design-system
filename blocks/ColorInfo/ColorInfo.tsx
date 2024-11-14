import * as React from 'react';
import { useTheme } from 'styled-components';

import { HFlex, Typography } from '@devoinc/genesys-ui';

type Props = {
  property: string;
  concept: string;
  scale: string;
};

export const ColorInfo: React.FC<Props> = ({ property, scale, concept }) => {
  const theme = useTheme();
  const evalColor = theme.alias.color[property][concept][scale];
  return (
    <HFlex>
      <div
        style={{ backgroundColor: evalColor, height: '48px', width: '48px' }}
      />
      <Typography.Caption>{evalColor}</Typography.Caption>
    </HFlex>
  );
};
