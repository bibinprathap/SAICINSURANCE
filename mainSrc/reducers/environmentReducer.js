// Initial State
const initialState = {
    env: 'test',
    title: 'test',
    baseURL: 'https://adroitclouderpreport.ngrok.io/' 
  };
  
// Reducers (Modifies The State And Returns A New State)
const environmentReducer = (state = initialState, action) => {
  switch (action.type) { 
       // Decrease Counter
    case 'ENVIRONMENT_INFO_CHANGED': {
        return {
          // State
          ...state,
          // Redux Store
          ...action.payload.propertyvalue,
        }
      }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default environmentReducer;