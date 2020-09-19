import axios from "axios";
const url = "items/getArayOfSepereteTypes/";

async function getItems() {
  const data = await axios.get(url).then(
    (response) => {
      return response.data;
    },
    (error) => {
      throw error;
    }
  );
  return data;
}

export async function getItemsMain() {
  const data = await getItems();
  return data;
}
