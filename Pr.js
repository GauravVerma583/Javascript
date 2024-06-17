let promise=new Promise(resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve("pass")
        }else{
            reject("fail")
        }
    },1000)
}
.then=>{
    console.log("")
}