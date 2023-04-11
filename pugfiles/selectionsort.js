//let's implement selection sort over here;
const i = require('./script');
const selectionSort =  ()=>{
    for(let j = 1; j<i; j++){
        let a = document.getElementById(`bar-${j}`);
        let b = document.getElementById(`bar-${j}`);
        let c = j;
        for(let l = j+1; l<=i; l++){
            let k = document.getElementById(`bar-${l}`);
            if(parseInt(b.childNodes[0].innerHTML) > parseInt(k.childNodes[0].innerHTML)){
                b = document.getElementById(`bar-${l}`);
                c = l;
            }
        }
        if(c!=j){
            let h1 = a.style.height;
            let h2 = b.style.height;
            a.style.height = h2;
            b.style.height = h1;
            let t1 = a.childNodes[0].innerHTML;
            let t2 = b.childNodes[0].innerHTML;
            a.childNodes[0].innerHTML = t2;                
            b.childNodes[0].innerHTML = t1;
        }
    }
}