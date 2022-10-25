const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const adatBeker = (req, res, next) => {
  app.locals.adat = req.body.szoveg;
  console.log(app.locals);
  next();
};

app.get('/', (req, res) => {
  //   const adat = app.locals.adat;
  res.render('index');
  //   res.json({ message: adat });
});

app.post('/', adatBeker, (req, res) => {
  const szoveg = app.locals.adat;
  res.json({ message: szoveg });
});

app.get('/masik', (req, res) => {
  console.log(app.locals);
  res.json({ message: app.locals });
  //   res.render('masik');
});

app.listen(3500, () => {
  console.log(`http://localhost:3500`);
});
