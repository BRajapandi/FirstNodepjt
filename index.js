const http = require('http');
const url = require('url');
const method = require('./methods.js')

const app = http.createServer(async(req,res)=>{
    const myUrl = url.parse(req.url,true);
    let data;
    // console.log("path",myUrl.path,"pathname",myUrl.pathname,"query",myUrl.query);
    // console.log("search",myUrl.search,"slashes", myUrl.slashes,"methods",myUrl.method);
    if(myUrl.pathname =='/books'&&req.method !="GET"){
        data = await method.getBooks();
    }
    if(req.url =='/books'){
        data = await method.updateBook();
    }
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(data));
})
// const myURL = new URL('https://example.org/?name=123');
    // console.log("object",myURL.searchParams.get('name'));
app.listen(3003,()=>{
    console.log("server Started on 3003");
})

