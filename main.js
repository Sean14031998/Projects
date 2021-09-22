const id = document.getElementById("switch-btn");
const body = document.getElementById("body");
const colorName = document.querySelector(".color-name")


id.addEventListener("click",function(){
    let colorToSet = generateColor();
     body.style.backgroundColor = colorToSet.toString();
     colorName.innerHTML=colorToSet.toString();
})

const Hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];



const generateColor = ()=>{
    let generatedColor = "#";
    let random = "";
    for(var x = 0; x<6;x++){
        random = parseInt(Math.random()*16);
        generatedColor+=Hex[random]
    }
    return generatedColor;
}