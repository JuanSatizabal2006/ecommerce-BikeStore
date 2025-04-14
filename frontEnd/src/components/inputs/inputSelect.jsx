import { Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { fetchFunction } from "../../api/fetch";

const InputSelect = ({ label, api = "", id, value }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchFunction("GET", null, null, api);
      if (response.error) {
        console.log(response.error);
      }
      console.log(response);
      
      setData(response.data.data);
    };
    getData();
  }, []);

  return (
    <Select label={label}>
      {data.map((item, index) => (
        <Option value={item[id]} key={index}>
          {item[value]}
        </Option>
      ))}
    </Select>
  );
};

export default InputSelect;
