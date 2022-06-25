const express = require('express');
const {engine } = require('express-handlebars');
const app = express();

// Configuration handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

// Route fichier static
app.use('/assets', express.static('public'));

// Router
app.get('/', function(req, res){
    res.render('home');
});



// Le serveur écoute sur le port 80
app.listen(3000);

