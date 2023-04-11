let num = document.getElementById("num");

let i = 0;
let insert = () => {
    let num = document.getElementById("num");
    if (num.value != "") {
        i++;
        let n = num.value;
        let canvas = document.getElementById("canvas");
        let bar = document.createElement("div");
        bar.style.transform = `translateX(${(i - 1) * 30}px)`
        let bar_id = document.createElement("div");
        bar_id.innerHTML = `${n}`;
        bar.classList.add("bar");
        bar.setAttribute("id", `bar-${i}`);
        bar_id.classList.add("bar_id");
        canvas.appendChild(bar);
        bar.appendChild(bar_id);
        let m = maximum();
        for (let j = 1; j <= i; j++) {
            let a = document.getElementById(`bar-${j}`);
            a.style.height = `${(parseInt(a.childNodes[0].innerHTML) * 300) / m}px`;
        }
    }
}

function maximum() {
    let max = 0;
    for (let j = 1; j <= i; j++) {
        let a = document.getElementById(`bar-${j}`);
        if (parseInt(a.childNodes[0].innerHTML) > max) {
            max = parseInt(a.childNodes[0].innerHTML);
        }
    }
    return max;
}

num.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // event.preventDefault();
        document.getElementById("ins").click();
    }
});

let check = 0;

async function bubbleSort() {
    for (let j = 1; j < i; j++) {
        for (let k = 1; k <= i - j; k++) {
            let a = document.getElementById(`bar-${k}`);
            a.style.backgroundColor = "red";
            let b = document.getElementById(`bar-${k + 1}`);
            b.style.backgroundColor = "blue";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            if (parseInt(a.childNodes[0].innerHTML) > parseInt(b.childNodes[0].innerHTML)) {
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 300)
                );
                check = 1;
                let h1 = a.style.height;
                let h2 = b.style.height;
                a.style.height = h2;
                b.style.height = h1;
                let t1 = a.childNodes[0].innerHTML;
                let t2 = b.childNodes[0].innerHTML;
                a.childNodes[0].innerHTML = t2;
                b.childNodes[0].innerHTML = t1;
                a.style.backgroundColor = "purple";
                b.style.backgroundColor = "pink";
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            a.style.backgroundColor = "yellowgreen";
            b.style.backgroundColor = "yellowgreen";
        }
        if (check == 0) {
            break;
        }
        check = 0;
    }
}

const selectionSort = async ()=>{
    for(let j = 1; j<i; j++){
        let a = document.getElementById(`bar-${j}`);
        a.style.backgroundColor = "blue";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
        let b = document.getElementById(`bar-${j}`);
        let c = j;
        for(let l = j+1; l<=i; l++){
            let k = document.getElementById(`bar-${l}`);
            k.style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            if(parseInt(b.childNodes[0].innerHTML) > parseInt(k.childNodes[0].innerHTML)){
                if(c!=j){
                    b.style.backgroundColor = "greenyellow";
                }
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 300)
                );
                b = document.getElementById(`bar-${l}`);
                b.style.backgroundColor = "white";
                c = l;
            }
            if(k.style.backgroundColor == "red"){
                k.style.backgroundColor = "greenyellow";
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 300)
                );
            }
        }
        if(c!=j){
            a.style.backgroundColor = "purple";
            b.style.backgroundColor = "pink";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            let h1 = a.style.height;
            let h2 = b.style.height;
            a.style.height = h2;
            b.style.height = h1;
            let t1 = a.childNodes[0].innerHTML;
            let t2 = b.childNodes[0].innerHTML;
            a.childNodes[0].innerHTML = t2;                
            b.childNodes[0].innerHTML = t1;
            a.style.backgroundColor = "purple";
            b.style.backgroundColor = "pink";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            b.style.backgroundColor = "greenyellow";
            a.style.backgroundColor = "greenyellow";
        }
        a.style.backgroundColor = "teal";
    }
    document.getElementById(`bar-${i}`).style.backgroundColor = "teal";
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, 2000);
    })
    for(let j = 1; j<=i; j++){
        document.getElementById(`bar-${j}`).style.backgroundColor = "greenyellow";
    }
}

const insertionSort = async ()=>{
    let key, k;
    for(let j = 2; j<=i; j++){
        key = document.getElementById(`bar-${j}`);
        val = parseInt(key.childNodes[0].innerHTML);
        ht = key.style.height;
        k = j-1;
        document.getElementById(`bar-${j-1}`).style.backgroundColor = "Blue";
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, 300)
        })
        while(k>=1 && parseInt(document.getElementById(`bar-${k}`).childNodes[0].innerHTML)>val){
            document.getElementById(`bar-${k+1}`).childNodes[0].innerHTML = parseInt(document.getElementById(`bar-${k}`).childNodes[0].innerHTML);
            document.getElementById(`bar-${k+1}`).style.height = document.getElementById(`bar-${k}`).style.height;
            k = k - 1;
        }
        document.getElementById(`bar-${k+1}`).childNodes[0].innerHTML = val;
        document.getElementById(`bar-${k+1}`).style.height = ht;
    }
}