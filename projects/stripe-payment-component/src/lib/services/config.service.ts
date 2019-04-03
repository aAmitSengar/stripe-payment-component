import { InjectionToken } from '@angular/core';
import { IConfig } from '../interfaces/configuration';

export const ConfigService = new InjectionToken<IConfig>('Config');
