//P1: func asyn con url en var

async function moviesApi(){
    //var con url
    const url = "https://jsonplaceholder.typicode.com/photos";
    //partimos con los intentos:
    try{
        //var solicitada con metodo fetch
        const resultado = await fetch(url);
        //var para convertir formato json
        const data = await Response.json();

        //metodo each solicitado (1eros 20 titulos)
        data.forEach(element => {
            if (element.id <21) {
                console.log(element.title);
            }
        });
        //atrapando el error
    }catch{
        //imp el 
        console.log(error.message);
    }

}

moviesApi();

//func. retorno de promesa en 3 seg:
function retornoMensaje() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
}