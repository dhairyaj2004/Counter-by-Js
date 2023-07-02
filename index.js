let counter=document.getElementById("counter")
let saved=document.getElementById("saved")
// const datacontainer=document.getElementsByClassName("container")
let count=0
function inc(){
    count=count+1
    counter.innerText=count
    //savedata()
}

function dec(){
    count=count-1
    counter.innerText=count 
    //savedata() 
}

function save(){
    let prv = count+" - "//Space after dash is not working so we use the alternative of innerText
    saved.textContent = saved.textContent+prv  
    console.log(count)
    //savedata()
}
function ref(){
    count=0;
    counter.innerText="0"
    
}

// function savedata(){
//     localStorage.setItem("data",datacontainer.innerHTML);
// }
// function show(){
//     datacontainer.innerHTML=localStorage.getItem("data");
// }
// show();
