import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'shared/components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: { text: '標準ボタン' },
};

export const ButtonWithArrow: Story = {
  args: { text: '矢印付きボタン', showArrow: true },
};

export const LargeButton: Story = {
  args: { text: '大ボタン', isLarge: true },
};
