
require("dotenv").config();
const pool = require("./db");

const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

// Add a new task
app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  const result = await pool.query("INSERT INTO tasks (title) VALUES ($1) RETURNING *", [title]);
  res.json(result.rows[0]);
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks");
  res.json(result.rows);
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  res.json({ message: "Task deleted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_jpr26NYHmxnX@ep-plain-haze-a57pqikh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

DATABASE_URL="postgresql: //neondb_owner:npg_jpr26NYHmxnX@ep-plain-haze-a57pqikh-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require";
PORT=5000
