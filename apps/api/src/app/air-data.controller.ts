import { AirData } from '@adaskothebeast/models';
import { Controller, Get, Post } from '@nestjs/common';

import { AirDataService } from './air-data.service';

@Controller('air-data')
export class AirDataController {
  constructor(private readonly airDataService: AirDataService) {}

  @Get()
  getData(): AirData {
    return this.airDataService.getData();
  }

  @Post()
  saveData(airData: AirData) {
    this.airDataService.saveData(airData);
  }
}
