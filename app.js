let display=document.querySelector("#display");


function press(value){
    display.value += value;
}
 function ClearDisplay(){
    display.value="";
 }

 function CalculateValue(){
    try{
        display.value=eval(display.value);

    }catch{
        display.value="Error"
    }
 }