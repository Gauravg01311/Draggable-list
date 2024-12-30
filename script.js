let box1=document.getElementById("box-1");
console.log(box1);
let box2= document.getElementById("box-2");
console.log(box2);

let lists= document.getElementsByClassName("c");
console.log(lists);

let selected=null;

for (let list of lists) {
    list.addEventListener("dragstart",(e)=>{
     selected=e.target;
    })
}

box2.addEventListener("dragover",(e)=>{
  e.preventDefault();
})

box2.addEventListener("drop",(e)=>{
   if (selected) {
    box2.appendChild(selected);
   }
   selected=null;
})

box1.addEventListener("dragover",(e)=>{
    e.preventDefault();
  })
  
  box1.addEventListener("drop",(e)=>{
     if (selected) {
      box1.appendChild(selected);
     }
     selected=null;
  })
   

