import { AirData } from '@adaskothebeast/models';
import { useMutation } from 'react-query';

import { api } from './api';

export async function saveAirData(data: AirData): Promise<void> {
  await api.post('air-data', data);
}

export function useMutateAirData() {
  return useMutation((airData: AirData) => saveAirData(airData));
}
