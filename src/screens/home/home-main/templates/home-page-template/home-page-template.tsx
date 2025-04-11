import { styled } from '@shared/ui/theme'
import { ReactNode } from 'react'

export type Props = {
  depositsSlot: ReactNode
  accountsSlot: ReactNode
  isLoading?: boolean
  refetch: VoidFunction
}

const Wrapper = styled.ScrollView`
  background-color: ${({ theme }) => theme.palette.background.primary};
  gap: ${({ theme }) => theme.spacing(2)}px;
`

export const HomePageTemplate = ({
  accountsSlot,
  depositsSlot,
  refetch,
  isLoading,
}: Props) => {
  return (
    <Wrapper refreshing={isLoading} onRefresh={refetch}>
      {accountsSlot}
      {depositsSlot}
    </Wrapper>
  )
}
