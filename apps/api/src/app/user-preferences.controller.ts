import { UserPreferences } from '@adaskothebeast/models';
import { Controller, Get, Post } from '@nestjs/common';

import { UserPreferencesService } from './user-preferences.service';

@Controller('user-preferences')
export class UserPreferencesController {
  constructor(
    private readonly userPreferencesService: UserPreferencesService
  ) {}

  @Get()
  getData(): UserPreferences {
    return this.userPreferencesService.getData();
  }

  @Post()
  saveData(airData: UserPreferences) {
    this.userPreferencesService.saveData(airData);
  }
}
