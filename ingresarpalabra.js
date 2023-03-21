palabra = JSON.parse( sessionStorage.getItem('listaPalabras'));

function agregarpalabras(event) {     
    var dato = document.getElementById('texto2').value;
    console.log('agregarpalabras', dato);      
    palabra.push(dato);
    
    sessionStorage.setItem('listaPalabras', JSON.stringify(palabra));

    for (i = 0; i < palabra.length; i++) {        
        console.log("aqui entro" + palabra[i]);     
    } 
    console.log('agregarpalabras', palabra)
}