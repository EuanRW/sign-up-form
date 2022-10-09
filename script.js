let inputs = document.getElementsByTagName('input');

for (var i=0; i< inputs.length; i++){
    inputs[i].onchange = function(){
        // validation code here
        if (this.checkValidity()){
            this.classList.add('valid') // if validation is true
        } else {
            this.classList.add('invalid') // if validation is false
        }
        
    }
}