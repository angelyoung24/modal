var modal = document.getElementById('modal');


modal.addEventListener('click', close);

function close() {
	modal.style.display = 'none'
}

setTimeout(function(){
    modal.style.display = 'block'   
}, 1000)