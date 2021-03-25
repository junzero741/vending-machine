const createStore = (reducer) => {
  
  let state = {};
  let listeners = [];

  const getState = () => {
    // return {...state};
    return state[Object.keys(state)[0]]
  }
  
  const dispatch = (action) => {
    state = reducer(state, action);
    notify(action);
  }
  
  const subscribe = (actionType, func) => {
    console.log(func)
    if (!listeners[actionType]) {
      listeners[actionType] = [func];
    } else {
      listeners[actionType].push(func);
    }
    
    // listeners.push({
    //   subscriber: func, 
    //   context
    // });
  }

  const unsubscribe = (observer) => {
    // listeners = listeners.filter((listener) => {
    //   return listener !== observer;
    // });
  }

  const notify = ({type, payload}) => {
    listeners[type]?.forEach((subscriber) => {
      // subscriber.call(context);
      subscriber(payload);
    });
  }
  
  return { getState, dispatch, subscribe, unsubscribe, notify }
}

export default createStore;