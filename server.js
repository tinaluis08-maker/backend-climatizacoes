const connectionString = process.env.DATABASE_URL;

console.log("VALOR REAL:", connectionString);

if (!connectionString) {
  console.error("❌ DATABASE_URL NÃO EXISTE");
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
});
