import React from "react";

const TitleHome = ({titulo, texto}) => {
  return (
    <div className="max-w-[800px] text-center">
      <h3 className="text-4xl font-semibold mb-6">
        {titulo}
      </h3>
      <p>
        {texto}
      </p>
    </div>
  );
};

export default TitleHome;
