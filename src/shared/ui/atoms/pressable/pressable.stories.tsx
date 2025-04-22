import type { Meta, StoryObj } from '@storybook/react';
import { Pressable } from './pressable';
import {Typography} from "@shared/ui/atoms";

const meta: Meta<typeof Pressable> = {
  title: 'ui/atoms/Pressable',
  component: Pressable,
  args: {
    children: <Typography>sample item</Typography>,
  },
};

export default meta;

type TPressableStory = StoryObj<typeof Pressable>;

export const Default: TPressableStory = {}
