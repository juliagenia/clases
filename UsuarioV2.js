class Usuario {
  #pin = "1234";

  constructor(nombre, email, edad) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;

    const pinGuardado = localStorage.getItem("usuarioPin");
    if (pinGuardado) {
      this.#pin = pinGuardado;
    } else {
      localStorage.setItem("usuarioPin", this.#pin);
    }
  }

  static crear(nombre, email, edad) {
    return new Usuario(nombre, email, edad);
  }

  cambiarPin(pinActual, pinNuevo) {
    if (pinActual === this.#pin) {
      this.#pin = pinNuevo;
      localStorage.setItem("usuarioPin", pinNuevo);
      return true;
    }
    return false;
  }
}

export default Usuario;