import type { Meta, StoryObj } from '@storybook/react';
import { ErrorScreen } from './error-screen';

const meta: Meta<typeof ErrorScreen> = {
  title: 'ui/molecules/ErrorScreen',
  component: ErrorScreen,
  args: {
    message: 'Сообщение об ошибке',
  },
};

export default meta;

type TErrorScreenStory = StoryObj<typeof ErrorScreen>;

export const Default: TErrorScreenStory = {}
