const input = document.getElementById('input');
const list = document.getElementById('list');
const message = document.getElementById('message');

function addTask (){
    if(input.value=== ''){
    message.textContent = `You have to type any thing!`;
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value='';
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        message.textContent='';
    }
}

list.addEventListener("click",function(e){
    
})