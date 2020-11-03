# Desarrollo WrapperCoin BackEnd

Ejercicio Fullstack Wrapper de BraveNewCoin para Bancolombia

# Cómo correr BackEnd API

1. Instalar todos los paquetes node_modules con `npm install`
2. Correr `nodemon api/index.js`

# Funciones implementadas y cómo hacer testing desde software de test como Postman o Insomnia

1. Leer Usuarios de DB. Se puede hacer testing con Get en http://localhost:3000/api/user
2. Obtener Usuario según su ID. Se puede hacer testing con Get en http://localhost:3000/api/user/123 siendo "123" el ID del usuario
3. Crear Usuario con ID único cos datos "name", "username", "password". La API automáticamente asigna un ID único. El password es automáticamente protegido en la DB con implementación bcrypt por lo cual no se guarda "quemado". Se puede hacer testing con Post en http://localhost:3000/api/user
4. Login de Usuario. La API genera internamente token jwt. Se puede hacer testing con Post usando "username" y "password" en http://localhost:3000/api/auth/login 
5. Editar Usuario. Con el token jwt generado al realizar el login, se le permiten permisos al usuario para editar sus datos. Se puede hacer testing con Put agregando el id y token jwt recibido a Bearer Token y editando "name", "username" o "password" en http://localhost:3000/api/user .Luego se puede verificar cambio con la función Leer Usuarios.