function mostrarAviso(){
    alert("Bienvenido al juego Dados, el juego incremental, DISFRUTA!!");
}
window.onload = function(){
    mostrarAviso(); //Esta función muestra el mensaje que se ha creado antes
};

function lanzarDado(){
    const R = Math.round(1+Math.random()*5);
    console.log(R);
    if(R == 1){
        mostrarResultados1();
    }else if(R == 2){
        mostrarResultados2();
    }else if(R == 3){
        mostrarResultados3();
    }else if(R == 4){
        mostrarResultados4();
    }else if(R == 5){
        mostrarResultados5();
    }else if(R == 6){
        mostrarResultados6();
    }
}

function mostrarResultados1(){
    alert("Ha salido 1");
}
function mostrarResultados2(){
    alert("Ha salido 2");
}
function mostrarResultados3(){
    alert("Ha salido 3");
}
function mostrarResultados4(){
    alert("Ha salido 4");
}
function mostrarResultados5(){
    alert("Ha salido 5");
}
function mostrarResultados6(){
    alert("Ha salido 6");
}