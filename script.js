//P2: func asyn con url en var

async function moviesApi(){
    //var con url
    const url = "https://jsonplaceholder.typicode.com/photos";

    //P3:metodo fetch
    try{
        //solicitud a la url
        const resultado = await fetch(url);
        //var para convertir formato json
        const data = await resultado.json(); //correcion nombre

        //P4: metodo each solicitado (1eros 20 titulos)
        data.forEach(element => {
            if (element.id <21) {
                console.log(`id: ${+element.id}, título: ${element.title}`);
            }
        });
        //atrapando el error
    }catch(error){ //correción, faltaba el parametro
        //imp el msj
        console.log(error.message);
    }
}
moviesApi();

//P5: func. retorno de promesa en 3 seg:
function retornoMensaje() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
}

//P6: func asyn 
async function mensajePromesa(){
    //almaceno la promesa:
        const resultado = await retornoMensaje();
        console.log(resultado);
    
}
mensajePromesa();