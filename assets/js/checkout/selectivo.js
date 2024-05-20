/*muestra oculta metodo seleccionado de pago*/

function mostrar(dato) {
    if (dato == "1") {
        document.getElementById("efectivo").style.display = "block";
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("mercadopago").style.display = "none";
        document.getElementById("transf").style.display = "none";
        document.getElementById("cardnumber").value = " ";
        document.getElementById("name").value = " ";
        document.getElementById("fechavenc").value = " ";
        document.getElementById("codigo").value = " ";
        document.getElementById("dni").value = " ";
        
    }
    if (dato == "2") {
        document.getElementById("efectivo").style.display = "none";
        document.getElementById("tarjeta").style.display = "block";
        document.getElementById("mercadopago").style.display = "none";
        document.getElementById("transf").style.display = "none";
    }

    if (dato == "3") {
        document.getElementById("efectivo").style.display = "none";
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("mercadopago").style.display = "block";
        document.getElementById("transf").style.display = "none";
        document.getElementById("cardnumber").value = " ";        
        document.getElementById("name").value = " ";       
        document.getElementById("fechavenc").value = " ";      
        document.getElementById("codigo").value = " ";       
        document.getElementById("dni").value = " ";
    }    

    if (dato == "4") {
        document.getElementById("efectivo").style.display = "none";
        document.getElementById("tarjeta").style.display = "none";
        document.getElementById("mercadopago").style.display = "none";
        document.getElementById("transf").style.display = "block";
        document.getElementById("cardnumber").value = " ";        
        document.getElementById("name").value = " ";       
        document.getElementById("fechavenc").value = " ";      
        document.getElementById("codigo").value = " ";       
        document.getElementById("dni").value = " ";
    }    
}

/*oculta desde boton borrar*/

function ocultar(){
    document.getElementById("efectivo").style.display = "none";
    document.getElementById("tarjeta").style.display = "none";
    document.getElementById("mercadopago").style.display = "none";
    document.getElementById("transf").style.display = "none";
}


/*validaciones*/

(function(){

    let formulario = document.getElementsByName('formulario')[0];
        elementos = formulario.elements;
        boton = document.getElementsByName('btn');
        letras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;


/*no deja enviar formulario si no selecciono metodo de pago*/

    let validarradio = function(e){
        if (formulario.opc[0].checked == true ||
            formulario.opc[1].checked == true || 
            formulario.opc[2].checked == true ||
            formulario.opc[3].checked == true){
        } else{
            alert("Debe elegir forma de pago");
            e.preventDefault();
            /*https://www.w3schools.com/jsref/event_preventdefault.asp
              Evita que un enlace abra la URL*/
        }
    };

/*valida datos de tarjeta*/

    let validardatostar = function(e){
        if (formulario.opc[1].checked == true &(
            formulario.tarjeta.value == "" || 
            (isNaN(formulario.tarjeta.value)) || 
            formulario.nombre.value ==  "" ||
            (!letras.test(formulario.nombre.value)) ||
            formulario.fecha.value == "" ||
            formulario.codigo.value == "" ||
            (isNaN(formulario.codigo.value)) ||
            formulario.dni.value == "" ||
            (isNaN(formulario.dni.value)) )){ 

            alert("datos de tarjeta incompletos o dato erroneo");
            e.preventDefault();
        }
    };

    let validar = function(e){
        
        validarradio(e);
        validardatostar(e);
       /* validarletras(e);
       /* validarnombre(e);
        validarfecha(e);*/
    };
    formulario.addEventListener("submit", validar);
}())




