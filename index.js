// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models/data.model');
const dataRoutes = require('./routes/data.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/data', dataRoutes);

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on http://localhost:${PORT}`);
});
