import pkg from "pg";
import 'dotenv/config'; 
const { Client } = pkg;


const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


await client.connect()
console.log("Connecter a la bdd via  ssh")

export default client
