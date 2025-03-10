// export const initialState = null;

// export const reducer =(state,action)=>{
//     if(action.type==="USER"){
//         return action.payload;
//     }
//     return state;
// }





export const initialState = false;  // false indicates the user is logged out

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload;  // true for logged in, false for logged out
  }
  return state;
};
