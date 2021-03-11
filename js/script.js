var generateBtn = document.getElementById('generate');
generateBtn.addEventListener ('click', function(){
    console.log("Yay you clicked me!");

    var burgerName = document.getElementById('burger-name').value;
    if (!burgerName) {
        alert('Inserisci il nome del panino e riprova');
    } else {
        console.log("Hai inserito un nome valido");
        var check = document.getElementsByClassName('recipe');
        console.log(check);
    }
})