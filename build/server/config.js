// Generated by CoffeeScript 1.8.0
var americano, config;

americano = require('americano');

config = {
  common: [
    americano.bodyParser(), americano.methodOverride(), americano.errorHandler({
      dumpExceptions: true,
      showStack: true
    }), americano["static"](__dirname + '/../client/public', {
      maxAge: 86400000
    })
  ],
  development: [americano.logger('dev')],
  production: [americano.logger('short')],
  plugins: ['americano-cozy-pouchdb']
};

module.exports = config;
