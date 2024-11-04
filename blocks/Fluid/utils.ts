import { ColProps } from '@devoinc/genesys-ui';

export const getEvalClassName = ({
  sm,
  md,
  lg,
}: {
  sm: ColProps['sm'];
  md: ColProps['md'];
  lg: ColProps['lg'];
}) => {
  return ''.concat(
    'col',
    sm ? ` col-sm-${sm}` : '',
    md ? ` col-md-${md}` : '',
    lg ? ` col-lg-${lg}` : '',
  );
};
