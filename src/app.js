const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    helpers: {
        formatDate: function(date) {
            return new Date(date).toLocaleDateString();
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/health', require('./routes/health'));

// View Routes
const ViewController = require('./controllers/ViewController');
app.get('/', ViewController.renderLogin);
app.get('/login', ViewController.renderLogin);
app.get('/register', ViewController.renderRegister);
app.get('/dashboard', ViewController.renderDashboard);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;