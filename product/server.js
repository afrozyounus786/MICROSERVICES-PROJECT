const app = require('./src/app');
const connectDB = require('./db/db');

connectDB();

const PORT = 3001;
app.listen(3001,()=>{
    console.log(`Product service is running on port ${PORT}`);
})