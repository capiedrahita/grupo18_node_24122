const pathSegments = window.location.pathname.split("/");
const idString = pathSegments[pathSegments.length - 1];
const id = parseInt(idString);

export function crearTarjetaPerfil(data) {


  let datos = document.querySelector(".perfil");
  datos.innerHTML = `
    <div class="perfil--datos">
        <div class="perfil--datos--usuario">
            <div class="item-card-informacionContacto-container container">
                <div>
                    <h4 class="item_parrafo ">Mi Perfil</h4>
                    <p class="item_parrafo ">Nombre: ${data.usuario.usuario_nombre}</p>
                    <p class="item_parrafo ">Apellido: ${data.usuario.apellido}</p>
                    <p class="item_parrafo ">Email: ${data.usuario.email}</p>
                    <p class="item_parrafo ">Telefonos: ${data.usuario.telefono}</p>
                </div>
                <div>
                    <h4 class="item_parrafo ">Domicilio</h4>
                    <p>Calle: ${data.usuario.calle}</p>
                    <p>Nro: ${data.usuario.numero}</p>
                    <p>Piso: ${data.usuario.piso}</p>
                    <p>Departamento: ${data.usuario.departamento}</p>
                    <p>Localidad: ${data.usuario.localidad}</p>
                </div>
                <div class="card-pefil-img-container col-3">
                    <img src='../repoImagenes/${data.usuario.imagen_nombre || 'avatar-vacio'}${data.usuario.extension || '.png'}' width="250" alt="Foto perfil">
                    <button id="editImgBtn" class="edit-img-btn">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="button-container">
                    <button class="perfil--datos--usuario--button" id="editBtn">Modificar</button>
                    <a href="/grilla2.html">
                        <button class="perfil--datos--usuario--button">Lista Figuritas</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
        <!-- Formulario oculto para subir una nueva imagen -->
    <form id="uploadImageForm" style="display: none;">
        <input type="file" id="imagen" name="imagen" accept="image/*">
        <button type="submit">Subir</button>
    </form
  `;

  document.getElementById("editBtn").onclick = function () {
    const modal = document.getElementById("editModal");
    const span = document.getElementsByClassName("close")[0];

    document.getElementById("nombre").value = data.usuario.nombre;
    document.getElementById("apellido").value = data.usuario.apellido;
    document.getElementById("email").value = data.usuario.email;
    document.getElementById("telefono").value = data.usuario.telefono;
    document.getElementById("calle").value = data.usuario.calle;
    document.getElementById("numero").value = data.usuario.numero;
    document.getElementById("piso").value = data.usuario.piso;
    document.getElementById("departamento").value = data.usuario.departamento;
    document.getElementById("localidad").value = data.usuario.localidad;

    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };

  document.getElementById("editProfileForm").onsubmit = function (event) {
    event.preventDefault();

    const editedData = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      calle: document.getElementById("calle").value,
      numero: document.getElementById("numero").value,
      piso: document.getElementById("piso").value,
      departamento: document.getElementById("departamento").value,
      localidad: document.getElementById("localidad").value
    };

    fetch(`/api/perfilDeUsuario/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((updatedData) => {
        fetch(`/api/perfilDeUsuario/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          crearTarjetaPerfil(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
        document.getElementById("editModal").style.display = "none";
      })
      .catch((error) => console.error("Error updating profile:", error));
  };
  document.getElementById("editImgBtn").onclick = function () {
    document.getElementById("imagen").click();
};

document.getElementById("imagen").onchange = function () {
    document.getElementById("uploadImageForm").submit();
};

document.getElementById("uploadImageForm").onsubmit = function (event) {
    event.preventDefault();
    
    const formData = new FormData();
    const imageFile = document.getElementById("imagen").files[0];
    if (imageFile) {
        formData.append("imagen", imageFile);
    }

    const pathSegments = window.location.pathname.split("/");
    const idString = pathSegments[pathSegments.length - 1];
    const id = parseInt(idString);
    console.log(id);

    fetch(`/api/perfilDeUsuario/${id}/imagen`, {
        method: "PUT",
        body: formData,
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((updatedData) => {
        fetch(`/api/perfilDeUsuario/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            crearTarjetaPerfil(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    })
    .catch((error) => console.error("Error updating profile image:", error));
};

}

export function publicacionesPerfil(data) {
    let datos = document.querySelector(".perfil--publicaciones--lista--table--body");
    datos.innerHTML = '';
    for (let i = 0; i < data.publicaciones.length; i++) {
        const publicacion = data.publicaciones[i];
        datos.innerHTML += `
        <tr>
            <td class="perfil--publicaciones--lista--imagen">
                <img src="" alt="Imagen de la publicación">
            </td>
            <td>${publicacion.titulo}</td>
            <td>${publicacion.cantidad}</td>
            <td>${publicacion.precio}</td>
            <td>
                <button class="perfil--publicaciones--button" onclick="actualizarPublicacion(${publicacion.publicacion_id})">Modificar</button>
                <button class="perfil--publicaciones--button" onclick="borrarPublicacion(${publicacion.publicacion_id})">Borrar</button>
            </td>
        </tr>`;
    }
}

fetch(`/api/perfilDeUsuario/${id}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {

    crearTarjetaPerfil(data);
    publicacionesPerfil(data);
  })
  .catch((error) => console.error("Error fetching data:", error));
