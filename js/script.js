const input = document.getElementById('input');
const list = document.getElementById('list');
const message = document.getElementById('message');

function addTask (){
    if(input.value=== ''){
    message.textContent = `You have to type any thing!`;
    saveData()
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value='';
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        message.textContent='';
        saveData()
    }
    
}

list.addEventListener("click",function(e){
   if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
   } else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
   }
},false);

function saveData(){
    localStorage.setItem('data',list.innerHTML);
}



function showData() {
    list.innerHTML = localStorage.getItem('data');
}

showData()