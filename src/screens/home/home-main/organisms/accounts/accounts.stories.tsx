import type { Meta, StoryObj } from '@storybook/react'

import { Accounts } from './accounts'
import { IconChevronUp, IconRubs24 } from '@shared/ui/icons'
import { darkTheme } from '@shared/ui/theme'

const meta: Meta<typeof Accounts> = {
  component: Accounts,
  title: 'Accounts',
}

export default meta

type Story = StoryObj<typeof Accounts>

export const Default: Story = {
  args: {
    accounts: [
      {
        id: '1',
        title: 'Счет расчетный',
        description: '457 334,00 ₽',
        iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
        rightSlot: <IconChevronUp color={darkTheme.palette.text.secondary} />,
      },
      {
        id: '2',
        title: 'Счет расчетный',
        description: '457 334,00 ₽',
        iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
        rightSlot: <IconChevronUp color={darkTheme.palette.text.secondary} />,
      },
      {
        id: '3',
        title: 'Счет расчетный',
        description: '457 334,00 ₽',
        iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
        rightSlot: <IconChevronUp color={darkTheme.palette.text.secondary} />,
      },
    ],
  },
}
