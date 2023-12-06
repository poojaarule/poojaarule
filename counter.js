let p=document.querySelector(".counter-value")




function onincriment(){
    let p=document.querySelector(".counter-value")
    let prev=p.textContent
    let updated=parseInt(prev)+1
  
   p.textContent=updated
}  
function decrement(){
    let p=document.querySelector(".counter-value")
    let prev=p.textContent
    let updated=parseInt(prev)-1
  
   p.textContent=updated
   console.log("pooja")
}      
function rest(){
    let p=document.querySelector(".counter-value")
    let prev=p.textContent
    let updated=0
  
   p.textContent=updated
   console.log("pooja")
}      