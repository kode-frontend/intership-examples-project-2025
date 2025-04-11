import { styled } from '@shared/ui/theme'
import { ListCell, ListCellData } from '../../molecules/list-cell'
import { Typography } from '@shared/ui/atoms'

type Identifiable<T> = T & { id: string }

export type Props = {
  deposits: Identifiable<ListCellData>[]
}

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
`

const Title = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.text.tertiary};
`

export const Deposits = ({ deposits }: Props) => {
  return (
    <Wrapper>
      <Title>Вклады</Title>
      {deposits.map(account => (
        <ListCell key={account.id} {...account} />
      ))}
    </Wrapper>
  )
}
