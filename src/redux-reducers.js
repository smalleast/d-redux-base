var NxStore = require('react-store');
var objectAssign = require('object-assign');
var INITIAL_ACTION = '@@redux/INIT';

module.exports = function (inState, inAction) {
  var type = inAction.type;
  var data = inAction.data;
  var state = type === INITIAL_ACTION ? {
      __root__: inState.root || null,
      __error__: inState.error || null,
      __request__: inState.request || {},
      __memory__: inState.memory || {}
    } : inState;

  switch (type) {
    case 'update':
      return objectAssign(state, data);
    case 'root':
      return objectAssign(state, {__root__: data});
    case 'error':
      return objectAssign(state, {__error__: data});
    case 'request':
      var requestData = objectAssign(state.__request__, data);
      return objectAssign(state, {__request__: requestData});
    case 'memory':
      var memoryData = objectAssign(state.__memory__, data);
      return objectAssign(state, {__memory__: memoryData});
    case 'session':
    case 'local':
      NxStore.engine = type + 'Storage';
      NxStore.sets(data);
      return state;
    case INITIAL_ACTION:
      if (inState.local) {
        NxStore.engine = 'localStorage';
        NxStore.sets(inState.local);
      }
      if (inState.session) {
        NxStore.engine = 'sessionStorage';
        NxStore.sets(inState.session);
      }
      break;
  }

  return state;
};
