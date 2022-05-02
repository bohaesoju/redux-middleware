export const logger = store => next => action => {
  // before after 의 형태로 로그를 남긴다
  const currentState = store.getState();

  console.groupCollapsed('action logger => ', action.type);
  console.log('currentState', currentState);
  console.log('action type', action.type);
  console.log('action payload', action.payload);
  console.groupEnd();

  next(action);
}