import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

export type Props = {
  rate: string
  date: string
}

const Wrapper = styled.View`
  gap: ${({ theme }) => theme.spacing(1.25)}px;
`

const StyledText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`

export const DepositInfo = ({ date, rate }: Props) => {
  return (
    <Wrapper>
      <StyledText variant='caption2'>{rate}</StyledText>
      <StyledText variant='caption2'>{date}</StyledText>
    </Wrapper>
  )
}
