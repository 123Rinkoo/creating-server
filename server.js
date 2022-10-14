const http= require('http'); //1.http module ko import kr re hain

//2. req jo pehle hum request dete hain like we search to kyi response aate hain then.
const server= http.createServer((req,res)=>{
    res.end("rinkoo2");  //4.response de rha hun 
})
// 3. ab hume listen bhi to krnna padhega request ko, vo request listen hogi 4000 port pe.
server.listen(4000,()=>{
    console.log('rinkoo1');
}); 