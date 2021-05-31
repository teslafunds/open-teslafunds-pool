/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-teslafunds-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//tsfpool.xyz:8080/',

      // HTTP mining endpoint
      HttpHost: 'http://tsfpool.xyz',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: 'tsfpool.xyz',
      StratumPort: 8008,

      // Fee and payout details
      PoolFee: '1%',
      PayoutThreshold: '1.5 TSF',

      // For network hashrate (change for your favourite fork)
      BlockTime: 30
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
