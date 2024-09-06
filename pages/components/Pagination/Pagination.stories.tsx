import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination, usePagination } from '@devoinc/genesys-ui';

Pagination.displayName = 'Pagination';

const meta: Meta<React.ComponentProps<typeof Pagination>> = {
  title: 'Components/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Pagination>>;

export const Example: Story = {
  render: () =>
    (() => {
      const list = React.useMemo(() => [...Array(150).keys()], []);
      const paginationHook = usePagination({
        list,
        conf: {
          initialPageSize: 5,
        },
      });
      return (
        <Pagination paginationHook={paginationHook}>
          <Pagination.Label />
          <Pagination.Range />
          <Pagination.Nav />
        </Pagination>
      );
    })(),
  tags: ['isHidden'],
};
