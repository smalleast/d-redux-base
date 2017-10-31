var NxStore = require('next-store');

NxStore.config(null);
module.exports = {
  actions: require('./src/redux-actions'),
  reducers: require('./src/redux-reducers'),
  states: require('./src/redux-states')
}
