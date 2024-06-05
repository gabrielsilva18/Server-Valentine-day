const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

const imagensFolder = path.join(__dirname, "src", "assets", "imagens"); // Caminho correto

console.log("Pasta de imagens:", imagensFolder); // Log da pasta de imagens

app.get("/listar-imagens", (req, res) => {
  try {
    const files = fs.readdirSync(imagensFolder);
    console.log("Arquivos encontrados:", files); // Log dos arquivos encontrados
    const imageUrls = files.map((file) => `assets/imagens/${file}`);
    res.json(imageUrls);
  } catch (error) {
    console.error("Erro ao listar imagens:", error); // Log do erro
    res.status(500).send("Erro ao listar imagens"); // Resposta de erro
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
