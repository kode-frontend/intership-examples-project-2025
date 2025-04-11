import type { Meta, StoryObj } from '@storybook/react'

import { ListCell } from './list-cell'
import { IconChevronUp, IconRubs24 } from '@shared/ui/icons'
import { darkTheme } from '@shared/ui/theme'

const meta: Meta<typeof ListCell> = {
  component: ListCell,
  title: 'ListCell',
}

export default meta

type Story = StoryObj<typeof ListCell>

export const Default: Story = {
  args: {
    title: 'Счет расчетный',
    description: '457 334,00 ₽',
    iconSlot: <IconRubs24 color={darkTheme.palette.text.secondary} />,
    rightSlot: <IconChevronUp color={darkTheme.palette.text.secondary} />,
  },
}
