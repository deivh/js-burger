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
        var priceTotal = 10;
        for (var i=0; i<check.length; i++) {
            var checkFor = check[i];
            var checkTrue = checkFor.checked;
            var priceAdd = parseInt(checkFor.dataset.price);
            console.log(checkFor, checkTrue, priceAdd);
            priceTotal += priceAdd;
        }
        console.log(priceTotal);
        var coupon = ['BU0N01LP4N1N0', 'BU0N01LP4N1N2', 'BU0N01LP4N1N3', 'BU0N01LP4N1N4']
        var couponTrue = document.getElementById('burger-coupon').value;
        console.log(couponTrue);
        if (!couponTrue) {
            document.getElementById('price').innerHTML = priceTotal;
        } else if (couponTrue) {
            for (var i=0; i<coupon.length; i++) {
                if (couponTrue == coupon[i]) {
                    priceTotal = (priceTotal / 100) * 80;
                    break;
                } else {
                    console.log("Il coupon inserito non è valido");
                }
            }
        }
        document.getElementById('price').innerHTML = priceTotal;
    }


})