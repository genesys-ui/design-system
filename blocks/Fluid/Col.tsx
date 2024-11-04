import * as React from 'react';
import { Col as UICol, ColProps } from '@devoinc/genesys-ui';
import { getEvalClassName } from './utils';

export interface DSColProps
  extends Omit<ColProps, 'xs' | 'xl' | 'xxl' | 'xxxl'> {}

export const Col: React.FC<DSColProps> = ({
  className,
  sm,
  md,
  lg,
  ...props
}) => {
  return (
    <UICol
      {...props}
      sm={sm}
      md={md}
      lg={lg}
      className={className || getEvalClassName({ sm, md, lg })}
    />
  );
};
