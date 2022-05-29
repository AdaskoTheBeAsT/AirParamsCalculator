import {
  EnthalpyUnit,
  HeightUnit,
  PressureUnit,
  SpecificHumidityUnit,
  TemperatureUnit,
} from '@adaskothebeast/metric-units';
import { UserPreferences } from '@adaskothebeast/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPreferencesService {
  static userPreferences: UserPreferences;
  getData(): UserPreferences {
    if (!UserPreferencesService.userPreferences) {
      UserPreferencesService.userPreferences = {
        airPressureUnit: PressureUnit.Pascal,
        altitudeUnit: HeightUnit.Meters,
        temperatureUnit: TemperatureUnit.Celsius,
        specificHumidityUnit: SpecificHumidityUnit.GramsPerKilogram,
        enthalpyUnit: EnthalpyUnit.KiloJoulesPerKilogram,
      };
    }

    return UserPreferencesService.userPreferences;
  }

  saveData(value: UserPreferences) {
    if (value) {
      UserPreferencesService.userPreferences = value;
    }
  }
}
