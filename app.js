import express from "express"


//middlewares
import cors from "cors";
import bodyParser from "body-parser"

import login from './src/routes/login.js'
import singup from'./src/routes/signup.js'


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', login)
app.use('/', singup)


app.listen(3000, () => {
  console.log("server listening on port", 3000);
});
