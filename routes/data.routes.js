const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config');
const ItemRoutes = require('./routes/item.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/items', ItemRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error('Error syncing database:', err));
