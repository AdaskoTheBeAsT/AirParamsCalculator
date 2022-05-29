import { AirData } from '@adaskothebeast/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AirDataService {
  static airData: AirData;
  getData(): AirData {
    if (!AirDataService.airData) {
      AirDataService.airData = {
        airPressure: 101325,
        temperature: 20,
        relativeHumidity: 60,
      };
    }

    return AirDataService.airData;
  }

  saveData(value: AirData) {
    if (value) {
      AirDataService.airData = value;
    }
  }
}
