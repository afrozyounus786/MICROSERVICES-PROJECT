require('dotenv').config({path: './src/.env'});
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();
const PORT = process.env.PORT || 3002;

app.listen(PORT, ()=>{
    console.log(`Cart service running on port ${PORT}`);
})