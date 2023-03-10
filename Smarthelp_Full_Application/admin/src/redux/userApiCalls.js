import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  getAdminUserSuccess,
  addUserStart,
  addUserSuccess,
  addUserFailure,
  currentUserSet,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import Swal from "sweetalert2";

export const normalUserRegister = async (User, token) => {
  // dispatch(addUserStart());
  try {
    const res = await publicRequest.post(`/user/createUser`, User, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return 1;
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User registration Failed!",
    });
    return 0;
  }
};

export const adminRegister = async (User, token) => {
  // dispatch(addUserStart());
  try {
    const res = await publicRequest.post(`/local_user/createUser`, User, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return 1;
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User registration Failed!",
    });
    return 0;
  }
};

export const login = async (dispatch, data) => {
  // const userData = JSON.stringify(data);
  console.log(data);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/api/user/login", data);
    console.log(res);
    dispatch(loginSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(loginFailure());
    return 0;
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/api/users/all", {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUserSuccess(res.data));
    return 1;
  } catch (err) {
    dispatch(getUserFailure());
    return 0;
  }
};

export const getUsersDummy = async (dispatch, token) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (err) {
    dispatch(getUserFailure());
    return 0;
  }
};

export const getAdminUsers = async (dispatch, token) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/local_user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getAdminUserSuccess(res.data.data));
    return 1;
  } catch (err) {
    dispatch(getUserFailure());
    return 0;
  }
};

export const getAdminUsersDummy = async (dispatch, token) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/local_user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (err) {
    dispatch(getUserFailure());
    return 0;
  }
};

export const getAdminUser = async (dispatch, id, username) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get(`/api/users/?userId=${id}&username=${username}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    dispatch(currentUserSet(res.data));
    return 1;
  } catch (err) {
    dispatch(getUserFailure());
    return 0;
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/api/users/${id}`, JSON.stringify({
      userId: id,
    }));
    dispatch(deleteUserSuccess(id));
    return 1;
  } catch (err) {
    dispatch(deleteUserFailure());
    return 0;
  }
};

export const updateNormalUser = async (user_id, User, dispatch, token) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await publicRequest.put(`/user/updateUser`, User, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    // dispatch(updateUserSuccess({ user_id, User }));
    return 1;
  } catch (err) {
    dispatch(updateUserFailure());
    return 0;
  }
};

export const updateAdminNormalUser = async (user_id, User, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await publicRequest.put(`/api/users/${user_id}`, User, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    // dispatch(updateUserSuccess({ user_id, User }));
    return 1;
  } catch (err) {
    dispatch(updateUserFailure());
    return 0;
  }
};

export const logOutUser = async (dispatch) => {
  dispatch(logout());
};

// export const addUserWithAuth = async (User, dispatch) => {
//   dispatch(addUserStart());
//   try {
//     const res = await userRequest.post(`/user/save`, User);
//     dispatch(addUserSuccess(res.data));
//   } catch (err) {
//     dispatch(addUserFailure());
//   }
// };
