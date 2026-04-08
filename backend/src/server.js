require('dotenv').config();
const express = require('express');
const cors = require('cors');
const curriculumRoutes = require('./routes/curriculum');
const worksheetRoutes = require('./routes/worksheet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/curriculum', curriculumRoutes);
app.use('/api/worksheet', worksheetRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Worksheet Generator API running on http://localhost:${PORT}`);
});
