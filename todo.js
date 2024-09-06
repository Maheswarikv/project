const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("you must write something!")
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        //displaying cross icon
        //create a span element for the remove button

        let removebtn = document.createElement("span");
       removebtn.textContent = '\u00d7';// 'x' symbol
       removebtn.className="remove-btn"
       removebtn.onclick = function(){
        li.remove();
       };
       li.appendChild(removebtn);

       //checked class 
       li.onclick=function(){
        li.classList.toggle("checked")
       }
       listcontainer.appendChild(li)

       inputbox.value="";
    }
    inputbox.value="";
}

//display when enter key press

document.getElementById("inputbox").onkeydown=function(e){
    if(e.key==="Enter"){
        addtask()
    }
}

