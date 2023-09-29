export class Usuario {
  public id: string;
  public nombre: string;
  public email: string;
  public password: string;
  public tipo: string;
  public sexo: string;
  public foto: string;

  constructor(
    id: string,
    nombre: string,
    email: string,
    password: string,
    tipo: string,
    sexo: string,
    foto: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.tipo = tipo;
    this.sexo = sexo;
    this.foto = foto;
  }
  guardarEnLocalStorage() {
    localStorage.setItem('usuarioGuardado', JSON.stringify(this));
  }

  // Método para obtener el usuario desde el almacenamiento local
  static traerDeLocalStorage(): Usuario | null {
    const resultado: string | null = localStorage.getItem('usuarioGuardado');
    if (resultado !== null) {
      return JSON.parse(resultado);
    }
    return null;
  }
  static CrearUsuarioVacio(): Usuario {
    return new Usuario('', '', '', '', '', '', '');
  }
  
}