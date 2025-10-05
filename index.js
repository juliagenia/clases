import Usuario from './UsuarioV2';

const usuario = Usuario.crear("Leon", "leon@example.com", 30);

document.getElementById("pinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const oldPin = document.getElementById("oldPin").value.trim();
  const newPin = document.getElementById("newPin").value.trim();
  const newPin2 = document.getElementById("newPin2").value.trim();

  if (!oldPin || !newPin || !newPin2) {
    mostrarMensaje("Todos los campos son obligatorios.", "error");
    return;
  }

  if (newPin.length < 4) {
    mostrarMensaje("El nuevo PIN debe tener al menos 4 dígitos.", "error");
    return;
  }

  if (newPin === oldPin) {
    mostrarMensaje("El nuevo PIN no puede ser igual al actual.", "error");
    return;
  }

  if (newPin !== newPin2) {
    mostrarMensaje("Los nuevos PIN no coinciden.", "error");
    return;
  }

  const resultado = usuario.cambiarPin(oldPin, newPin);

  if (resultado) {
    mostrarMensaje("PIN actualizado correctamente.", "success");
    document.getElementById("pinForm").reset();
  } else {
    mostrarMensaje("PIN actual incorrecto.", "error");
  }
});

function mostrarMensaje(texto, tipo = "success") {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.className = `max-w-md mx-auto mt-4 text-center font-semibold p-2 rounded ${
    tipo === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`;
  mensaje.classList.remove("hidden");

  setTimeout(() => {
    mensaje.classList.add("hidden");
  }, 4000);
}