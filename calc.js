let screen=document.getElementById('screen')

function btnclick(value){
    screen.vakue+=value;
}
function clearscreen(){
    screen.value="";
}
function findresult(){
    var result=eval(screen.value);
    screen.value=result;
}