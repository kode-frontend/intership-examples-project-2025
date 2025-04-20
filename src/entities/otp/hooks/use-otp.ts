import { useMutation } from '@tanstack/react-query';

import { coreApi } from 'shared/api';
import { DefaultApiPostApiCoreOtpRequest } from 'shared/api/core-axios-client';

export const useOtp = () => {
  return useMutation({
    mutationFn: (payload: DefaultApiPostApiCoreOtpRequest) =>
      coreApi.postApiCoreOtp(payload),
  });
};
