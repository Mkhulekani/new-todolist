const pool = require("./db");

const createTableQuery = `
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);
`;

pool.query(createTableQuery)
  .then(() => console.log("Tasks table created successfully!"))
  .catch(err => console.error("Error creating table:", err))
  .finally(() => pool.end());
