import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'ui/atoms/Separator',
  component: Separator,
  args: {
    spacing: {
      left: 2,
      right: 2,
      top: 2,
    },
  },
};

export default meta;

type TSpacerStory = StoryObj<typeof Separator>;

export const Default: TSpacerStory = {}
