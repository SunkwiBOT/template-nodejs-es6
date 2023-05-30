/* eslint-disable no-console */
import {} from 'dotenv/config';
import logger from './logger.mjs';

process.on('unhandledRejection', (reason, p) => {
  console.log('[Error_Handling] :: Unhandled Rejection/Catch');
  console.log(reason, p);
  console.log('[Error_Handling] :: Unhandled Rejection/Catch', { reason, p });
});

process.on('uncaughtException', (err, origin) => {
  console.log('[Error_Handling] :: Uncaught Exception/Catch');
  console.log(err, origin);
  logger.error('[Error_Handling] :: Uncaught Exception/Catch', { err, origin });
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('[Error_Handling] :: Uncaught Exception/Catch (MONITOR)');
  console.log(err, origin);
  logger.error('[Error_Handling] :: Uncaught Exception/Catch (MONITOR)', { err, origin });
});
