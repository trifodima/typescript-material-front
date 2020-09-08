const createReducer = (initialState: any, handlers: any): Function => (state: any = initialState, { type, payload }: any): void => {
  const handler = handlers[type];
  return handler ? handler(state, payload) : state;
};

export default createReducer;
