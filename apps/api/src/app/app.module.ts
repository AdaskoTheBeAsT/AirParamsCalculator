import { Module } from '@nestjs/common';

import { AirDataController } from './air-data.controller';
import { AirDataService } from './air-data.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPreferencesController } from './user-preferences.controller';
import { UserPreferencesService } from './user-preferences.service';

@Module({
  imports: [],
  controllers: [AppController, AirDataController, UserPreferencesController],
  providers: [AppService, AirDataService, UserPreferencesService],
})
export class AppModule {}
