function addField(){
    const formField = document.getElementById('divName');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'myInputs[]';
    newInput.placeholder = 'Enter your text here';
    formField.appendChild(newInput);
    
}

function removeField(){
    const formField = document.getElementById('divName');
    if(formField.length > 2){
        formField.removeChild(formField.lastChild);
    }else{
        return;
    }
    

}
const removeButton = document.getElementById('remove');
    removeButton.addEventListener('click', removeField);

const addButton = document.getElementById('add');
    addButton.addEventListener('click', addField);
