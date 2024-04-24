document.getElementById("botaoCode").addEventListener("click", function(e){

    var textoInput = document.getElementById("valorInput").value;

    JsBarcode("#codeBarra", textoInput);

});