import { useQuery } from '@tanstack/react-query';

import { paymentApi } from 'shared/api';

export const usePaymentList = () => {
  return useQuery({
    queryFn: async () => (await paymentApi.getPaymentList()).data,
    queryKey: ['payment-list'],
  });
};
