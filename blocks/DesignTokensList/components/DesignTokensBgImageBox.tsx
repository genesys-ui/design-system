import * as React from 'react';

import { StyledDesignTokensBgImageBox } from './styled';

type Props = {
  $bgImage: string;
};

export const DesignTokensBgImageBox: React.FC<Props> = ({ $bgImage }) => (
  <StyledDesignTokensBgImageBox $bgImage={$bgImage} title={'ieecasdasdsa'} />
);
