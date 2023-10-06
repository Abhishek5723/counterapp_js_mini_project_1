let countvalue=document.querySelector('#counter');

let increment=()=>{
let val= parseInt(countvalue.innerText);
val+=1;
countvalue.innerText=val;

}

let decrement=()=>{
    let val=parseInt(countvalue.innerText);
    val-=1;
    countvalue.innerText=val;
}