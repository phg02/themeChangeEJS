const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.use(express.static('public'));

const user = {
    theme: 'dark',
    name: 'Muck',
}

app.get('/', (req, res)=>{
    const theme = user.theme;
    res.render('index', {theme: theme});
})
app.get('/test', (req, res)=>{
    const theme = user.theme;
    res.render('test', {theme: theme});
})
app.listen(port, ()=>{console.log(`Listening on ${port}`)})