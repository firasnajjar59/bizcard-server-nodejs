const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require("debug")("bizcard:app");
const cors = require("cors");
const api = require('./routes/api');
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
debug("test")
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(
//     mongoSanitize({
//         allowDots: true,
//       }),
//   );

// app.use((req,res,next)=>{
//     if(req.body){
//         for(let item in req.body){
//             req.body[item]=req.body[item].replaceAll("$","").replaceAll("{","}").replaceAll("function","bye")
            
//         }
//     }
    // console.log(req.body);
//     next()
// })
// routers
app.use("/api",api)

// get method to root
// app.get('/', (req,res)=>{
//     res.json({
//         msg:"ok"
//     })
// });

module.exports = app;
