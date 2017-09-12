// dynamic imports are not supported by es6, so I'm using require instead of import
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
