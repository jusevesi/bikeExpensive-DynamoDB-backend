const bar = [1,2,3,4,6,7,8,9,10];

const bar1 = {JUAN: 'NOMBRE'};


if(!Array.isArray(bar)|| bar === null){
    if(typeof bar === "object"){
        console.log('Object!')
    }
}else{
    console.log("Array o Null!")
}