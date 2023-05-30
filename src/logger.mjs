import log4js from 'log4js';

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      level: 'debug',
      layout: {
        type: 'pattern',
        pattern: '%[[%d{dd/MM/yyyy hh:mm:ss}] [%p] | %f{2}:%l:%o | - %m%]'
      }
    },
    everything: {
      type: 'dateFile',
      numBackups: 100000000000000,
      alwaysIncludePattern: true,
      filename: './log/logs',
      pattern: 'yyyy-MM-dd.log',
      layout: {
        type: 'pattern',
        pattern: '[%d{dd/MM/yyyy hh:mm:ss}] [%p] | %f{2}:%l:%o | - %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['everything', 'console'],
      level: 'debug',
      enableCallStack: true
    }
  }
});

const logger = log4js.getLogger();

// logger.info('my info message');
// logger.warn('my info message');
// logger.error('my info message');
// logger.fatal('my info message');
// logger.mark('my info message');

export default logger;
