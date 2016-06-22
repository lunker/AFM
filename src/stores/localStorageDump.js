'use strict';

/*
    action들이 발생될 때 마다, store의 상태를 저장한다.
 */
export default store => next => action => {
    const state = store.getState();
    console.log(state);
    localStorage.setItem('AFM', JSON.stringify(state.UserReducer));
    next(action);
};
