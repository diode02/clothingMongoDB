import axios from "axios";
const url = "http://localhost:3000/items/getArayOfSepereteTypes/";

async function getItems() {
  const data = await axios
    .get(url, {
      //   headers: {
      //     Authorization: `Bearer ${Cookie.get("token")}`,
      //   },
    })
    .then(
      (response) => {
        return response.data;
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

export async function getItemsMain() {
  const data = await getItems();
  return data;
}
