const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('ACTION', action.type);
  console.log('PREV_STATE', store.getState());
  const result = next(action);
  console.log('NEW_STATE', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
