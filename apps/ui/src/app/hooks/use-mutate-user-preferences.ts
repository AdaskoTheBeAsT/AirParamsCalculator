import { UserPreferences } from '@adaskothebeast/models';
import { useMutation } from 'react-query';

import { api } from './api';

export async function saveUserPreferences(
  data: UserPreferences
): Promise<void> {
  await api.post('user-preferences', data);
}

export function useMutateUserPreferences() {
  return useMutation((userPreferences: UserPreferences) =>
    saveUserPreferences(userPreferences)
  );
}
