import axios from "axios";
// import Cookie from "js-cookie";
const url = "users/";

export async function logOutAsync(token) {
  var config = {
    headers: { Authorization: token },
  };

  var bodyParameters = {
    key: "value",
  };

  const data = axios
    .post(url + "/logout", bodyParameters, config)
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
  return data;
}

export async function signInWithEmailAndPassword(userData) {
  const data = await axios({
    method: "post",
    url: url + "login",
    data: userData,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error.message;
    });
  return data;
}

// export async function logoutAll(event) {
//   var config = {
//     headers: { Authorization: Cookie.get("token") },
//   };

//   var bodyParameters = {
//     key: "value",
//   };

//   const data = await axios
//     .post(url + "/logoutAll", bodyParameters, config)
//     .then((response) => {
//       Cookie.remove("token");
//       // console.log(response);
//       return true;
//     })
//     .catch((error) => {
//       // console.log(error);
//       return false;
//     });
//   return data;
// }

// export async function getUserInfo() {
//   const data = await axios
//     .get(url, {
//       headers: {
//         Authorization: `Bearer ${Cookie.get("token")}`,
//       },
//     })
//     .then(
//       (response) => {
//         // var response1 = response.data;
//         // console.log(response1);
//         return response.data;
//       },
//       (error) => {
//         // console.log(error.response.status);
//         return error.response.status;
//       }
//     );
//   return data;
// }

// export async function deleteUser() {
//   const data = await axios
//     .delete(url + "/me", {
//       headers: {
//         Authorization: `Bearer ${Cookie.get("token")}`,
//       },
//     })
//     .then(
//       (response) => {
//         // console.log(response.data);
//         Cookie.remove("token");
//         return response.data;
//       },
//       (error) => {
//         // console.log(error.response.status);
//         return error.response.status;
//       }
//     );
//   return data;
// }

export async function createUserWithEmailAndPassword(userData) {
  const response = await axios({
    method: "post",
    url: `${url}signup/`,
    data: userData,
  })
    .then((response) => {
      //   Cookie.set("token", response.data.token);
      console.log("success" + response.data.data);
      return response.data.data;
    })
    .catch((error) => {
      console.log("not created " + error);
      return error;
    });
  return response;
}
// export async function logOutUser(id) {
//   const data = await handleLogout(id);
//   return data;
// }
// export async function logInUser(event) {
//   const data = await handleLogin(event);
//   return data;
// }

// export async function deleteAvatar(event) {
//   const data = await axios
//     .delete(url + "/me/avatar", {
//       headers: {
//         Authorization: `Bearer ${Cookie.get("token")}`,
//       },
//     })
//     .then((response) => {
//       return true;
//     })
//     .catch((error) => {
//       return false;
//     });
//   return data;
// }
