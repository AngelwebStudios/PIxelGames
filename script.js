function filtrar() {
    let texto = document.getElementById('buscador').value.toLowerCase();
    let tarjetas = document.getElementsByClassName('card');

    for (let i = 0; i < tarjetas.length; i++) {
        let titulo = tarjetas[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        let descripcion = tarjetas[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        if (titulo.includes(texto) || descripcion.includes(texto)) {
            tarjetas[i].style.display = "flex";
        } else {
            tarjetas[i].style.display = "none";
        }
    }
}
