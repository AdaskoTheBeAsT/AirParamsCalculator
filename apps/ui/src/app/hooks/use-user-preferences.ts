import { UserPreferences } from '@adaskothebeast/models';
import { useQuery } from 'react-query';

import { api } from './api';

export async function fetchUserPreferences(): Promise<UserPreferences> {
  const { data } = await api.get<UserPreferences>('user-preferences');

  return data;
}

export default function useUserPreferences() {
  return useQuery('user-preferences', () => fetchUserPreferences());
}
