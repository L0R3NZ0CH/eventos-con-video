let video = document.querySelector('.botonVideo');

video.addEventListener('play', function () {
    console.log('Di play en el video');
});

video.addEventListener('seeking', function () {
    console.log ('Se esta viendo una parte del video', this.currentTime);
});

video.addEventListener('ended', function () {
    console.log ('Termino en el video');
    // alert('Se termino el video');
    let decision = confirm('¿Deseas ver de nuevo el video?');
    console.log (decision);
    if(decision){
        video.play();
    }else{
        window.location = "https://www.youtube.com/";
    }
});

video.addEventListener('pause', function () {
    console.log ('Pauso el video');
});

// Temporizadores o timer
// setInterval
// setTimeout

let temporizador = setInterval (function () {
    ponerColorBody()}, 2000);

setTimeout( function () {
    ponerColorBody();}, 3000);

    function ponerColorBody() {
      let  pantalla = document.body;
        pantalla.style.backgroundColor = pantalla.style.backgroundColor == "blue" ? " green" : "blue";
    }

// Arreglos, Vectores, Arrays

//               posiciones
// let array = ['uno', 'dos', 'tres'];

// let array2 =['cuatro', 'cinco', 'seis'];

// let mutidimensional = [array, array2,];

// multidimensional [0][1]; //= 'dos';