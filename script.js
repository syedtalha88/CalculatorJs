let result=document.getElementById('display');

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("please enter a valid input");
    }
}
let clr=()=>{
    result.value='';
}
let del=()=>{
    result.value=result.value.slice(0,-1);
}