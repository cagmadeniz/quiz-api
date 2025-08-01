require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS yapılandırması
app.use(cors({
  origin: process.env.FRONTEND_URL || `http://localhost:${PORT}`,
  methods: ['GET', 'POST'],
  credentials: true
}));

// JSON veriyi işlemek için
app.use(express.json());

// Public klasöründen sun frontend için
app.use(express.static(path.join(__dirname, '..', 'public')));

// API rotaları
app.use('/api', apiRoutes);

// 404 Hatası
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint bulunamadı' });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
