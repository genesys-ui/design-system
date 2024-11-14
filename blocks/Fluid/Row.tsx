import * as React from 'react';
import { Row as UIRow, RowProps } from '@devoinc/genesys-ui';

export const Row: React.FC<RowProps> = ({ className = 'row', ...props }) => {
  return <UIRow {...props} className={className} />;
};
