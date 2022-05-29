import {
  EnthalpyUnit,
  HeightUnit,
  PressureUnit,
  SpecificHumidityUnit,
  TemperatureUnit,
} from '@adaskothebeast/metric-units';

export interface UserPreferences {
  airPressureUnit: PressureUnit;
  altitudeUnit: HeightUnit;
  temperatureUnit: TemperatureUnit;
  specificHumidityUnit: SpecificHumidityUnit;
  enthalpyUnit: EnthalpyUnit;
}
