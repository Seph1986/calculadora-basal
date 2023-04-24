const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = +document.getElementById('peso').value

    if (DATO > 0 && DATO < 31){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    else if (DATO > 30){
        let flujo = superficieCorporal(DATO);
        FLU.innerHTML = 'r1 * 1500 = ' + ((flujo)) * 1500 / 24;
        MAN.innerHTML = 'r2 * 2000 = ' + ((flujo)) * 2000 / 24;
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
     else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})


function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

function superficieCorporal(peso){
    let resto = peso;

        calc =  ((resto * 4) + 7) / (resto + 90);
       let flujo =  calc; 

    return flujo.toFixed(3);
}