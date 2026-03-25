const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_FIX,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error("ERRO NO BANCO:", err);
    res.status(500).json({ erro: err.message });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Servidor rodando');
});

console.log("URL DO BANCO:", process.env.DATABASE_URL);
