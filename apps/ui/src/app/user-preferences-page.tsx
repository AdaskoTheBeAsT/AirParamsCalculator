import { PressureUnit } from '@adaskothebeast/metric-units';
import { useMemo } from 'react';

import useUserPreferences from './hooks/use-user-preferences';

export function UserPreferencesPage() {
  const { data } = useUserPreferences();
  const pressureUnit = useMemo(() => {
    const unitValue = data?.airPressureUnit ?? PressureUnit.ftH2O;
    return PressureUnit.getLabel(unitValue);
  }, [data]);

  return <div>{pressureUnit}</div>;
}
