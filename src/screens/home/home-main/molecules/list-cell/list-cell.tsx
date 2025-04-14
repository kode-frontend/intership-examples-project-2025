import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { ReactNode } from 'react'

export type ListCellData = {
  iconSlot: ReactNode
  title: string
  description: string
  rightSlot: ReactNode
}

export type Props = ListCellData & {
  onPress?: () => void
}

const Wrapper = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  gap: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: row;
  align-items: center;
`

const Content = styled.View`
  gap: ${({ theme }) => theme.spacing(0.25)}px;
  flex-shrink: 1;
`

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.accent.primary};
`

const Right = styled.View`
  margin-left: auto;
`

export const ListCell = ({
  iconSlot,
  rightSlot,
  title,
  description,
  onPress,
}: Props) => {
  return (
    <Wrapper onPress={onPress}>
      {iconSlot}
      <Content>
        <Typography numberOfLines={1}>{title}</Typography>
        <Description>{description}</Description>
      </Content>
      <Right>{rightSlot}</Right>
    </Wrapper>
  )
}
