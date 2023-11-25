
let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let valuee = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");
let DEL = document.querySelector("#DEL")

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){

        if(this.innerHTML == "="){
            valuee.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML == "AC"){
                valuee.innerHTML = "";
            }else{
                valuee.innerHTML += this.innerHTML;
            }
   
        }

    })
}
DEL.addEventListener("click", () => {
  
   let dell = valuee.innerHTML;
      valuee.innerHTML = dell.slice(0,-1)
})



toggleBtn.onclick = function(){
    body.classList.toggle("dark");
};