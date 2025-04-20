import { StackScreenProps } from '@react-navigation/stack'
import { OtpScreen } from './ui/otp-screen/otp-screen'

import { useEffect, useState } from 'react'
import { useConfirmOtp, useResendOtp } from 'entities/otp/hooks'
import { RootStackParamsList } from '@routing/app-navigation/types'

type TPaymentProvidersProps = StackScreenProps<
  RootStackParamsList,
  'PaymentOtp'
>

// Делаем фичу переиспользуемой
// type Props = {
//   otpId: string;
//   otpLength: number;
//   resendIn: number;
//   onConfirmed: () => void;
// };

export const OtpConnector = ({ navigation, route }: TPaymentProvidersProps) => {
  const [value, setValue] = useState('')

  const { otpId, otpLength, resendIn } = route.params

  const { mutateAsync, data, isPending } = useConfirmOtp()

  const { mutate, data: resendData } = useResendOtp()

  const handleConfirm = (otp: string) => {
    if (value.length === otpLength) {
      mutateAsync(
        {
          postApiCoreOtpConfirmRequest: {
            otp,
            otpId,
          },
        },
        {
          onSuccess: () => {
            // onConfirmed();
          },
        },
      )
      //
    }
  }
  useEffect(() => {
    handleConfirm(value)
  }, [value])
  return (
    // TODO: add loading, error
    <OtpScreen
      isLoading={isPending}
      canResend={false}
      onResend={() => {
        console.log('resend')
        mutate({
          postApiCoreOtpResendRequest: {
            otpId,
          },
        })
      }}
      resendIn={resendData?.data.resendIn || resendIn || 0}
      attemptsLeft={
        resendData?.data.attemptsLeft || data?.data.attemptLeft || 0
      }
      onChange={setValue}
      value={value}
    />
  )
}
