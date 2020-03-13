const express = require('express');

const app = express();
// const config = require('./configDB');
// const pdfReceipt = require('./pdf/CreateReceipt');
// const email = require('./emailing/Email');
const PORT = process.env.PORT || 8002;
// app.listen(PORT, () => console.log(`server started at port ${PORT}, database name is ${config.database}`));
app.listen(PORT, () => console.log(`server started at port ${PORT}`));

app.use('/api/register/', require('./routes/api/Register'));