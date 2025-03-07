require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend du portfolio fonctionne 🚀');
});

app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
