const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});