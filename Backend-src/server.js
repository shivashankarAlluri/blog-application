const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const cookieparser=require("cookie-parser");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


const blogRoutes = require('./routes/blogRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const commentRoutes = require('./routes/commentRoutes.js');
const { authenticate } = require('./middleware/authenticate.js');

app.use('/', authRoutes);
app.use('/', authenticate, blogRoutes);
app.use('/', authenticate, commentRoutes);
    

connectDB().then(() => {
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
}).catch((error) => {
    console.error("Failed to connect to database:", error);
});