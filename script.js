function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(function(){
        elemento.innerHTML += letra;
      }, 80 * i)
        
    });
   }


const titulo = document.querySelector('h3');
typeWriter(titulo);