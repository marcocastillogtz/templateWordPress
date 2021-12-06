window.onload = function () {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //establece el tamaño del canvas en función del tamaño de la imagen
    let cw = (canvas.width = laImagen.width),
        cx = cw / 2;
    let ch = (canvas.height = laImagen.height),
        cy = ch / 2;
    // el texto va centrado en el centro del canvas
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // el color del texto e blanco con un 50% de transparencia.
    ctx.fillStyle = "rgba(255,255,255)";
    // dibuja la imagen en el canvas
    ctx.drawImage(laImagen, 0, 0);
    // el texto para la marca de agua
    let texto = "RegisFotoVideo";
    let tamanoTexto = 60; // empieza con algo grande, más grande de lo que sea necesario

    ctx.font = tamanoTexto + "px Arial";
    // mide la anchura del texto
    let anchuraTexto = ctx.measureText(texto).width;
    // mientras que el texto siga demasiado grande
    while (anchuraTexto > canvas.width - 20) {
        // disminuie el tamaño del texto
        tamanoTexto--;
        ctx.font = tamanoTexto + "px Arial";
        anchuraTexto = ctx.measureText(texto).width;
    }



//ctx.width = window.innerWidth;
//ctx.height=window.innerHeight-canvas.offsetHeight;

    //pinta el texto en el canvas
    ctx.fillText(texto, cx, cy);

    //vuelve a transformar la imagen en data:uri
    //console.log(canvas.toDataURL());
};