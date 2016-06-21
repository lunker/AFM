'use strict';


export default store => next => action => {
    const { type } = action;
    if (type === 'INIT') {
        try {
            const storedState = JSON.parse(
                localStorage.getItem('AFM')
            );
            if (storedState) {
                store.dispatch({
                    type: 'RESET_STATE',
                    storedState: storedState
                });
            }
            return;
        } catch (e) {
            // Unable to load or parse stored state, proceed as usual
        }
    }

    next(action);
};
