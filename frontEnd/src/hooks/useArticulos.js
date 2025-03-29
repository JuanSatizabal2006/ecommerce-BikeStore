import { useEffect, useState } from "react";
import { urlApi } from "../constants/urlApi";
const urlInitial = `${urlApi}articulos/list?page=1&limit=6`;

export const useArticulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [link, setLink] = useState("");
  const [more, setMore] = useState(true);
  const [countArt, setCountArt] = useState(0);

  const getApi = async (url = urlInitial) => {
    let next = "",
      dataArticulos = [],
      count = 0,
      error = false;

    const response = await fetch(url);
    if (response.status !== 200) {
      console.log(response.data.error);

      error = true;
      return { next, dataArticulos, count, error };
    }
    //Capturamos la respuesta
    const data = await response.json();

    dataArticulos = data.data.articulos;
    count = data.data.count;
    next = data.data.sgtPagina; //URL de la siguiente pagina
    return { next, dataArticulos, count, error };
  };

  const moreArticulos = async () => {
    if (!link) {
      setMore(false);
      return;
    }

    const { next, dataArticulos } = await getApi(link);
    setArticulos((prev) => [...prev, ...dataArticulos]);
    setLink(next);
  };

  //Solo se activa una vez
  const getArticulos = async () => {
    const { next, dataArticulos, count, error } = await getApi();

    if (error) {
      setMore(false);
      setLink(false);
      return;
    }

    setLink(next);
    setArticulos(dataArticulos);
    setCountArt(count);
  };

  useEffect(() => {
    getArticulos();
  }, []);

  return { moreArticulos, articulos, more, countArt };
};
