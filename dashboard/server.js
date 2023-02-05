const express = require('express')
const app = express()
const port = 3000
const { commands } = require('../handlers/command-handler');

// this is to be able to use assets such CSS/JS
app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

__dirname;
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('index'));
app.get('/commands', (req, res) => res.render('commands', {
  subtitle: 'Commands',
  categories :[
    {name: 'Auto Mode' , icon:'fa fa-gavel'},
    {name: 'Economy' , icon:'fa fa-database'},
    {name: 'General' , icon:'fa fa-star'},
    {name: 'Music' , icon:'fa fa-music'}
  ], 
  commands: Array.from(commands.values()),
  commandsString: JSON.stringify(Array.from(commands.values()))
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})