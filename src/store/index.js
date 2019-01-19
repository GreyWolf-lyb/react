import { createStore } from 'redux';

const defaultState = {
    
}

const reducer = (state = defaultState,action) => {
    const { type,payload } = action;
    switch(type){
        case '':
            return state;
        default :
            return state;
    }
}
const Store = createStore(reducer);

export default Store;
