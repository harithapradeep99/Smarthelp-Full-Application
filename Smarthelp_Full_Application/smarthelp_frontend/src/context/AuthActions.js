export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload:error
  });
  
  export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
  });
  
  export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
  });
  

  export const UpdateStart = (userCredentials) => ({   //try update profile
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (user) => ({  //try update profile
    type: "UPDATE_SUCCESS",
    payload: user,
  });
  
  export const UpdateFailure = (error) => ({  //try update profile
    type: "UPDATE_FAILURE",
    payload:error
  });