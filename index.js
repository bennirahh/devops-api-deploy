import express from "express";
import product from "./routes/product.js"; 

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1"; 
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur notre API en Node.js (version moderne)" });
});

app.use("/product", product);

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur http://${HOST}:${PORT}`);
});
