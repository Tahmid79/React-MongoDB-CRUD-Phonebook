const Router=  require('koa-router') ;
const route =  new Router() ;

const Phone =  require('../model/Phone.js') ;


//GET ALL
route.get('/' , (ctx, next) =>{

    console.log('Connected to Root Route') ;
    return Phone.find({} , (err , results) => {
        console.log(results) ;
        ctx.body = results ;
    }) ;


}) ;


//GET SINGLE Phone
route.get('/get/:id' , (ctx , next) =>{

    console.log('Getting Single Item') ;
    return Phone.findById(  ctx.params.id , (err, results) =>{
        console.log(results) ;
        ctx.body = results ;
    })

}) ;




//POST Phone
route.post('/create' , (ctx, next) =>{

    console.log('Creating A Post') ;
    console.log(ctx.request.body) ;

    Phone.create(ctx.request.body, (err, result) =>{
        console.log(result) ;
    }) ;

    ctx.response.status = 201 ;

    next() ;

}) ;



//EDIT A PHONE
route.put('/edit/:id' , (ctx,next) =>{

    console.log('Editing A Post') ;

    Phone.findByIdAndUpdate(ctx.params.id , ctx.request.body ,  (err ,result) =>{

        console.log(result) ;

    } )  ;

    next()  ;

});






//DELETE PHONE

route.delete('/delete/:id' , (ctx, next) =>{

    console.log('Deleting Single Item');

    Phone.findByIdAndRemove(ctx.params.id , (err,result) =>{
        console.log(result) ;
        console.log('Deleted') ;
    }) ;

    next() ;

}) ;









ts = [] ;

route.post('/new' , (ctx , next)=>{

    console.log('Creating A Post Request') ;
    console.log(ctx.request.body)   ;


    if (
        !ctx.request.body.name ||
        !ctx.request.body.phone )
    {
        ctx.response.status = 400 ;
        ctx.body = "Please Enter Data" ;

    }else{

        const {name , phone } = ctx.request.body ;

        let newphone = ts.push({
            name , phone
        });

        console.log(ctx.request.body) ;
        ctx.response.status = 201 ;
        ctx.body = `New phone added with title = ${title} and name = ${isDone}` ;
        next() ;

    }
});






module.exports = route ;
