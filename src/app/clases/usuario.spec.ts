import { Usuario } from './usuario';

describe('Usuario', () => {
  it('should create an instance', () => {
    // Supongamos que estos son los valores que ingresaste en la función registrar
    const nombre = 'John Doe';
    const email = 'john@example.com';
    const password = 'password';
    const tipo = 'tipo';
    const sexo = 'masculino';
    const foto = 'foto.jpg';

    // Crear una instancia de Usuario con los mismos valores
    const usuario = new Usuario('1', nombre, email, password, tipo, sexo, foto);

    // Verificar si la instancia se creó correctamente
    expect(usuario).toBeTruthy();
  });
});
