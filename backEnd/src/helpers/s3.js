const { config } = require("dotenv");
const fs = require("fs");
config();
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_PUBLIC_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const subirAws = async (archivo, ruta) => {
  try {

    const stream = fs.createReadStream(archivo.path);

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: stream,
      Key: `productos/${ruta}/${archivo.originalname}`,
    };

    const command = new PutObjectCommand(uploadParams);

    await client.send(command);
    
    const result = command.input.Key;
    console.log(result, 'RESULT AWS');

    return command.input.Key;

  } catch (error) {
    console.log(`ESTE ES EL ERROR: ${error}`);
  }
};

module.exports = { subirAws };
