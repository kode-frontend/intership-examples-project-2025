import { PaymentServices } from './payment-services'
import { useDebounce } from '@shared/lib'
import { useForm } from 'react-hook-form'
import { TPaymentServicesForm, TServiceItem } from './types'
import { services } from './constants'

type Props = {
  onGoToPaymentCreate: (id: string, title: string) => void
}

export const PaymentServicesConnector = ({ onGoToPaymentCreate }: Props) => {
  const { control, watch } = useForm<TPaymentServicesForm>({
    defaultValues: {
      search: '',
    },
  })

  const searchValue = watch('search')

  const debounceSearch = useDebounce(searchValue, 300)

  const handleCreatePayment = (id: string, title: string) => {
    onGoToPaymentCreate(id, title)
  }

  const filteredData = services.filter(i =>
    i.serviceName
      .toLocaleLowerCase()
      .includes(debounceSearch.toLocaleLowerCase()),
  )

  return (
    <PaymentServices
      data={filteredData}
      onCreatePayment={handleCreatePayment}
      control={control}
    />
  )
}
