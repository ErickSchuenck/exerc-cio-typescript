import pg from "pg";
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg
const config = {
  connectionString: process.env.DATABASE_URL
}

// fixme
// if (process.env.MODE === "PROD") {
//   configDatabase.ssl = {
//     rejectUnathorized: false
//   }
// }

const db = new Pool(config)
export default db;
