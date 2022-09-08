function escopo(){
    const form=document.querySelector('.form');
    function recebeEvento( evento){
        evento.preventDefault();
        const firstName= form.querySelector('.name-input').value;
        const lastName= form.querySelector('.last-name-input').value;
        const peso= Number(form.querySelector('.peso-input').value);
        const altura= Number(form.querySelector('.altura-input').value);
        const idade=Number(form.querySelector('.idade-input').value);

        const imc=(peso/(altura*altura)).toPrecision(4);
        const spanImcResult= form.querySelector('.p-result');
        const spanNameResult=form.querySelector('.name-result');
        const spanLastName= form.querySelector('.last-name-result');
        const spanResultComp= form.querySelector('.result-comp');
        spanNameResult.innerHTML=firstName;
        spanLastName.innerHTML=lastName;
        spanImcResult.innerHTML=imc;
        spanResultComp.innerHTML=imcResult(imc);
    }
    form.addEventListener('submit',recebeEvento);
}
function imcResult(imc){
    if (imc>=50){
        return imc='Obesidade gravissima';
    }else if(imc>=40){
        return imc='Obesidade grave';
    }else if(imc>=35){
        return imc='Obesidade moderada';
    }else if(imc>25){
        return imc='Sobrepeso'
    }else if(imc>=18){
        return imc='Peso ideal';
    }else{
        return imc='Abaixo do peso'
    }
}
escopo();
    /*
    imc=peso/(altura*altura);
    form.onsubmit=function(evento){
        evento.preventDefault();
        alert('Formulario enviado');
        console.log('Formulario enviado')
    };
 */
