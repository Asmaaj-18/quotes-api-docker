const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());

// Citations avec thème + auteur
let quotes = [
  { text: "Le succès appartient à ceux qui persévèrent.", author: "Napoléon", theme: "succes" },
  { text: "Le temps guérit tout.", author: "Proverbe", theme: "temps" },
  { text: "Aimer, c'est vivre.", author: "Victor Hugo", theme: "amour" },
  { text: "La mode se démode, le style jamais.", author: "Coco Chanel", theme: "fashion" }
];

// Accueil HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Citation aléatoire
app.get('/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

// Citation par thème
app.get('/quote/theme/:theme', (req, res) => {
  const themeQuotes = quotes.filter(q => q.theme === req.params.theme);
  
  if (themeQuotes.length === 0) {
    return res.json({ error: "Aucune citation pour ce thème" });
  }

  const random = themeQuotes[Math.floor(Math.random() * themeQuotes.length)];
  res.json(random);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});