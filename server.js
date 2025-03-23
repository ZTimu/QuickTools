// Server entry point that imports and runs the main application
const app = require('./src/app');
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'handlebars');