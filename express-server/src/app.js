const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000;
const loginRouter = require('./api/login');

const middleWare = (req, res, next) => {
  console.log("running the middleware for",req.method, req.url)
  next();
}
app.use(middleWare);
app.use(express.json())
app.use(loginRouter);
app.use(cors())
app.get('/', (req, res) => {
  res.setHeader('X-Foo', 'bar');
  res.setHeader('Content-Type', 'text/plain');
  res.json('welcome.!');
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})