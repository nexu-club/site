const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:x0Cjv6iWGsVy@ep-plain-sea-72674425-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})