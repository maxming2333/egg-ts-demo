/**
 * production
 *
 *  prod + default（override）
 */

import { EggAppConfig } from 'egg';

export default (appInfo: EggAppConfig) => {
  const config: any = {};

  config.middleware = [
    'access',
    'global',
  ];
  return config;
};
