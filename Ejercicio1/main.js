var form = document.getElementById("pares");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function calcularPares() {
    let limite = parseInt(document.pares.limite.value);
    let arrayPares = [];

    for (let index = 0; index <= limite; index++) {
        if(index%2 == 0){
            console.log(index);
            arrayPares.push(index);
        }
    }
    document.pares.resultado.value = arrayPares.join(" - ");
}