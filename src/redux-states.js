var NxStore = require('react-store');
module.exports={
  getUpdate:function(inStore){
    return inStore.getState();
  },
  getRoot:function(inStore){
    return inStore.getState().__root__;
  },
  getError:function(inStore){
    return inStore.getState().__error__;
  },
  getMemory:function(inStore){
    return inStore.getState().__memory__;
  },
  getRequest:function(inStore){
    return inStore.getState().__request__;
  },
  getLocal:function(inKeys){
    NxStore.engine='localStorage';
    return NxStore.gets(inKeys);
  },
  getSession:function(inKeys){
    NxStore.engine='sessionStorage';
    return NxStore.gets(inKeys);
  }
};
