console.log(22);


const sumDigProd = (...args)=>{
    let product
    //reduce the array (+)
   const sum = args.reduce((a,c)=> {
        return a + c
    }, 0)

    const sumArr = JSON.stringify(sum).split("");
    
    const findProd = (arr)=>{
        //reduce the array
        const prod = arr.reduce((a,c)=>{
            return a  * parseInt(c)
        }, 1)
    
        if(JSON.stringify(prod).length === 1){
               product = prod
               return;
        }else{
            findProd(JSON.stringify(prod).split(""));
        }
    }

   findProd(sumArr);
    return product;
}


