import { AirData } from '@adaskothebeast/models';
import { useQuery } from 'react-query';

import { api } from './api';

export async function fetchAirData(): Promise<AirData> {
  const { data } = await api.get<AirData>('air-data');

  return data;
}

export default function useAirData() {
  return useQuery('user-preferences', () => fetchAirData());
}
