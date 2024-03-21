const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/route');
app.use('/', indexRouter);

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
  console.log(`App Starting on port ${port}`);
});
