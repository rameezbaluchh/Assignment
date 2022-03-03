const express = require('express')
const { engine } = require('express/lib/application')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
  res.render('home')
});
app.get('/contact', (req, res) =>{
  res.render('contact')
});
app.get('/about', (req, res) =>{
  res.render('about')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})