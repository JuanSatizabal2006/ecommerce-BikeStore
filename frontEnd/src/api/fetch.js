import { urlApi } from "../constants/urlApi";

export const fetchFunction = async (
  method,
  body,
  header = { "Content-Type": "application/json" },
  url
) => {
  let dataBody = !body ? null : JSON.stringify(body);
  let headerFetch = header || { "Content-Type": "application/json" };

  try {
    const response = await fetch(`${urlApi}${url}`, {
      method: method,
      body: dataBody,
      headers: headerFetch,
    });

    const data = await response.json();
    const result = { status: response.status, data: data };
    return result;
  } catch (error) {
    return {
      status: 500,
      error: error.message,
    };
  }
};
