import express from "express";
import product from "./routes/product.js"; 

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur notre API en Node.js (version moderne)" });
});

app.use("/product", product);

app.listen(port, () => {
  console.log(`🚀 Serveur en ligne sur http://localhost:${port}`);
});
