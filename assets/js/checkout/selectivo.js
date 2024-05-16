function mostrar(dato) {
    if (dato == "1") {
        document.getElementById("efectivo").style.display = "block";
        document.getElementById("tarjeta").style.display = "none";/*
        document.getElementById("tarjeta").aria-required.false;/*
        document.getElementById("cardnumber").value = " ";
        document.getElementById("name").value = " ";
        document.getElementById("fechavenc").value = " ";
        document.getElementById("codigo").value = " ";
        document.getElementById("dni").value = " ";*/
        document.getElementById("mercadopago").style.display = "none";
    }
    if (dato == "2") {
        document.getElementById("efectivo").style.display = "none";
        document.getElementById("tarjeta").style.display = "block";/*
        document.getElementById("cardnumber").setAttribute.required = "true";/*
        document.getElementById("cardnumber").required = "true";/*
        document.getElementById("name").required = "true";
        document.getElementById("fechavenc").required = "true";
        document.getElementById("codigo").required = "true";
        document.getElementById("dni").required = "true";*/
        document.getElementById("mercadopago").style.display = "none";
    }
    if (dato == "3") {
        document.getElementById("efectivo").style.display = "none";
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("mercadopago").style.display = "block";/*
        document.getElementById("cardnumber").required = "false";
        document.getElementById("cardnumber").value = " ";
        document.getElementById("name").required = "false";
        document.getElementById("name").value = " ";
        document.getElementById("fechavenc").required = "false";
        document.getElementById("fechavenc").value = " ";
        document.getElementById("codigo").required = "false";
        document.getElementById("codigo").value = " ";
        document.getElementById("dni").required = "false";
        document.getElementById("dni").value = " ";*/
    }    
}

function ocultar(){
    document.getElementById("efectivo").style.display = "none";
    document.getElementById("tarjeta").style.display = "none";
    document.getElementById("mercadopago").style.display = "none";
}


(function(){
    //Variables
    let formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementsByName('btn');

   /* let validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
            //https://www.w3schools.com/jsref/event_preventdefault.asp
            //Evita que un enlace abra la URL
        }
    };*/

    let validarRadio = function(e){
        if (formulario.opc[0].checked == true ||
            formulario.opc[1].checked == true || 
            formulario.opc[2].checked == true){
        } else{
            alert("Debe elegir forma de pago");
            e.preventDefault();
        }
    };
    
  /*  let validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
        }
    };*/

    let validar = function(e){
       /* validarNombre(e);*/
        validarRadio(e)
       /* validarCheckbox(e);*/
    };
    formulario.addEventListener("submit", validar);
}())




