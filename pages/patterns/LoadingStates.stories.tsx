import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, FlexItem, HFlex, IconButton } from '@devoinc/genesys-ui';

const Template: React.FC = () => null;

const meta: Meta<React.ComponentProps<typeof Template>> = {
  title: 'Patterns/Loading states',
  component: Template,
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof Template>>;

export const IconButtonLoading: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <FlexItem>
        <IconButton
          title="Add to favorites"
          icon="like_heart_favorite_rating_love"
        />
      </FlexItem>
      <FlexItem>
        <IconButton
          title="Adding..."
          state="loading"
          icon="like_heart_favorite_rating_love"
        />
      </FlexItem>
    </HFlex>
  ),
};

export const ButtonTextLoading: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <FlexItem>
        <Button>Add to favorites</Button>
      </FlexItem>
      <FlexItem>
        <Button state="loading">Adding to favorites...</Button>
      </FlexItem>
    </HFlex>
  ),
};

export const ButtonIconTextLoading: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <FlexItem>
        <Button icon="like_heart_favorite_rating_love">
          Add to favorites...
        </Button>
      </FlexItem>
      <FlexItem>
        <Button state="loading" icon="like_heart_favorite_rating_love">
          Adding to favorites...
        </Button>
      </FlexItem>
    </HFlex>
  ),
};
