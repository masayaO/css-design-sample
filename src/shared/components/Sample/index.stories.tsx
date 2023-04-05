import type { Meta, StoryObj } from '@storybook/react';

import Sample from './index';

const meta: Meta<typeof Sample> = {
  title: 'shared/components/Sample',
  component: Sample,
};
export default meta;
type Story = StoryObj<typeof Sample>;

export const Default: Story = {};
