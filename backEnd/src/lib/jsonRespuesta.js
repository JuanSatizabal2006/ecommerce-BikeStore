const jsonRespuesta =  (statuscode, body) => {
    return {
      statuscode,
      body: body,
    };
  };

module.exports = { jsonRespuesta }