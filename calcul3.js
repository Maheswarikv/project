let calculationcomplete =false;

function appendTodisplay(value){
    const display=document.getElementById('screen2')
    if(calculationcomplete && !isNaN(value))
        {
        display.value=value;
        calculationcomplete=false;
    }
   else{
    display.value+=value;
   }
}
function cleardisplay(){
    const display=document.getElementById('screen2')
    display.value=""
}
function deletdisplay (){
    const display=document.getElementById('screen2')
    display.value=""
}

function calculate(){
    const display=document.getElementById('screen2')
    try{
        display.value=eval(display.value)
        calculationcomplete=true;
    }
    catch(e){
    display.value="error"        
    }
}
