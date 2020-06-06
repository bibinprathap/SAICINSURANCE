// Initial State
const initialState = {
   logindetails:{ username: '',
   password: '',
   acceptPolicy: false,
   keepLogged: false,
   forgotPassword: false,}
  };
  
// Reducers (Modifies The State And Returns A New State)
const loginReducers = (state = initialState, action) => {
  switch (action.type) {
   // Decrease Counter
    case 'INFO_CHANGED': {
        return {
          // State
          ...state,
          // Redux Store
          [action.payload.property]: action.payload.propertyvalue,
        }
      }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default loginReducers;