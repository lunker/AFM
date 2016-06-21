'use strict';

export default store => next => action => {
    const state = store.getState();
    console.log(state);
    localStorage.setItem('AFM', JSON.stringify(state));
    next(action);
};
