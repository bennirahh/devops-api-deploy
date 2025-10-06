import express from "express";
import client from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const product = { text:'SELECT * FROM products',}

  const result = await client.query(product)

  res.json(result.rows)

  console.log ("methode :",req.method)
});

export default router;
