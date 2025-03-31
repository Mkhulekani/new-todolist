const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://your_username:your_password@your_host/neondb",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
