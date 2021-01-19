import express from 'express';
import {routes} from "./routes/index";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Accept-Version, device-id, env, User-IP, x-api-key',
    );
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});

app.use("/v1", routes);

app.listen(4000,() => {
    console.log("app is listening to port 4000");    
});

process.on('uncaughtException', (error) => {
    console.log(error);
  });

process.on('unhandledRejection', (error) => {
    console.log(error);
});


module.exports = app;
