import axios from "axios";
// import Cookie from "js-cookie";
async function getCollections() {
  const data = await axios({ url: "collections/getAll", method: "get" }).then(
    (response) => {
      const data = Object.values(response.data);
      return data;
    },
    (error) => {
      var status = error.response.status;
      if (status === 401) {
        return status;
      }
      console.log(status);
    }
  );
  return data;
}

export async function getCollectionMain() {
  const data = await getCollections();
  return data;
}
