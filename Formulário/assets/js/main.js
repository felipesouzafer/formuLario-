const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span = document.querySelector('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/;


function setError(index){
   campos[index].getElementsByClassName.border = '1px solid red'
}

function nameValidate(){
    if(campos[0].value.length < 3){
       setError(0);
    }
     else
    {
      console.log('Validado o nome');
    }
}