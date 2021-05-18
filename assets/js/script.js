
$(document).ready(function(){

    // EVENTO que carga el popover
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    // EVENTO QUE ENVIAR MENSAJE AL HACER CLICK SOBRE BOTON
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    })

    // EVENTO QUE CAMBIA DE COLOR EL TITULO H3
    $("h3").on('dblclick',function(){
        if ($(this).hasClass("color_rojo")){
            $(this).removeClass("color_rojo");
            $(this).addClass("color_negro");    
        }else{
            $(this).removeClass("color_negro");    
            $(this).addClass("color_rojo");
        }
    })

    // EVENTO QUE OCULTA TODOS LOS CARD Y LUEGOS LOS HACE VISIBLES.
    $(".card-title").click(function(){
        $(".card-body p").toggle();
    })

   
});


