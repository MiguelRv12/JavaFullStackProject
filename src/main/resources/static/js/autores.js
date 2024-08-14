async function listarAutores() {

    let json = await fetchAutores()

    let html = ""
    console.log(json);
    json.forEach(autor => {
        html += ` <tr>
            <td>${autor.nombre}</td>
            <td>${autor.pais}</td>
            <td><a href="#" onclick="onClickVerLibros (${autor.id})" class="btn btn-primary btn-icon-split">
                                                <span class="text">Ver libros</span>
                                            </a>
                <a href="#" onclick="editAutor(${autor.id})" class="btn btn-primary btn-icon-split">
                    <span class="text">Editar</span>
                </a>
                <a href="#" onclick="deleteAutor(${autor.id})" class="btn btn-danger btn-icon-split">
                    <span class="text">Eliminar</span>
                </a>
            </td>
        </tr>`
    });

    document.getElementById("tablaAutor").outerHTML = html;


}
async function onClickVerLibros(id) {
    window.location.href = "tables.html?idAutor=" + id;
}

async function deleteAutor(id) {
    let confirmaEliminar = confirm("Desea eliminar el autor?")
    if (confirmaEliminar) {
        await deleteAutorFromBD(id);
        listarAutores();
    }

}

async function editAutor(id) {
    window.location.href = "gestionar-libro.html?" + id
}

listarAutores()