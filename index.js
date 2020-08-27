const koa =  require('koa') ;
const server = new koa() ;
const views = require('koa-views') ;

const bodyParser = require('koa-body') ;

const nunj = require('nunjucks') ;
nunj.configure('./views' , {autoescape : true}) ;

const static = require('koa-static') ;

require('dotenv').config() ;



const cors = require('koa-cors');
//const HttpStatus = require("http-status");



const mongoose = require('mongoose') ;
const db = mongoose.connection ;

//const host = process.env.host ;

const dbupdate = {
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
    useFindAndModify : false
} ;


const host = 'mongodb+srv://brad:1234@mytasklist-brad.hvyqj.mongodb.net/mytasklist_brad?retryWrites=true&w=majority'


mongoose.connect(host , dbupdate) ;



db.on('error' , err => { console.log('Error DB not connected' + err)  }) ;
db.on('connected' , ()=>{console.log('Connected to Mongo')}) ;
db.on('disconnected' , ()=> console.log('DB Disconnected')) ;
db.on('open' , ()=> console.log('Connection Made')) ;


//Git

const phone = require('./routes/phone.js');

const Phone = require('./model/Phone.js') ;



server.use(cors()) ;

server.use(bodyParser()) ;

server.use(phone.routes()) ;



server.use(views('./views' , {map : {html : 'nunjucks'}}))  ;

server.use(static('./public')) ;





server.listen(3002 , 'localhost'  , ()=>{
    console.log('Listening on port 3002')
}) ;
