import axios from "axios";

export async function getData(url, params) {
  try {
    return await axios.get(`${process.env.REACT_APP_API}${url}`, {
      params,
    });
  } catch (err) {
    return err;
  }
}

export async function getDataWilayah(url) {
  try {
    return await axios.get(`${process.env.REACT_APP_WILAYAH}${url}`);
  } catch (err) {
    return err;
  }
}

export async function postData(url, payload, formData) {
  return await axios.post(`${process.env.REACT_APP_API}${url}`, payload, {
    headers: {
      "Content-Type": formData ? "multipart/form-data" : "application/json",
    },
  });
}

export async function putData(url, payload) {
  return await axios.put(`${process.env.REACT_APP_API}${url}`, payload, {});
}

export async function deleteData(url, payload) {
  return await axios.delete(`${process.env.REACT_APP_API}${url}`);
}
