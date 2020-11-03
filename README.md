# desarrollo-fullstack
Ejercicio de desarrollo Fullstack para Bancolombia v1.0.

Nota Supuesto General: Como desarrollo FullStack, la implementación contiene la base general de todo el ejercicio planteado (BackEnd y FrontEnd)
y cuenta con separación de responsabilidades entre los componentes de la solución para posibilitar implementar detalles específicos pendientes de asesoría de personal especializado dentro del equipo de trabajo.

## BackEnd
Al interior de la carpeta BackEnd se encuentra la implementación de la API REST con Node.js Express y con su archivo Readme para detalles.

### Definición de Supuestos BackEnd
1. Para la implementación de un usuario único se optó por la creación de un Id único por usuario, posibilitando así que aunque haya edición de username o password, el Id del mismo siempre será único.
2. Al mencionar Sequelize, se supone el requerimiento de una DB relacional, por lo que se implementó para pruebas del ejercicio una DB real de MySQL que es pertinente para el mismo, pero no para producción. Por lo cual se da como supuesto que en el momento de producción será reemplazada por otra fuente de DB que sea proporcionada por la empresa. 
3. Se implementó autenticación mediante tokens jwt generados por la api, que luego del login, establecen permisos al usuario. Se implementó permisos al usuario para editar sus datos luego de superar "username" y "password". Con este principio, la api cuenta con separación de responsabilidad para implementar que el usuario pueda agregar criptomonedas a sí mismo en el supuesto de una futura implementación para agregar crédito real.
4. La implementación de ID único con la que cuenta la api posibilita generar la relación única "usuario-criptomoneda".
5. La arquitectura de la Api con las carpetas y archivos para sus componentes separadas principalmente en "Index", "Network" y "Controller", permiten separar responsabilidades para así implementar en una próxima versión, con el soporte de personal especializado del equipo, los dos endpoints dependientes del proveedor de datos externo BraveNew Coin que se encuentran dentro de la api aún en su fase de sesarrollo aislados con comentarios.
6. Se exploró y se programó la herramienta jest para realizar pruebas unitarias, el archivo se encuentra en la carpeta utility dentro del proyecto, pero se encuentra pendiente de revisión para alcanzar el objetivo propuesto.

## FrontEnd
Al interior de la carpeta FrontEnd se encuentra la implementación de la SPA con Angular y con su archivo Readme para detalles.

### Definición de Supuestos FrontEnd
1. Al no requerir login para funcionalidades, se deja responsabilidad separada para recibir DB desde API con los usuarios y se omite dicha implementación en la página. La conexión con la API para verificar que es consumida se puede visualizar con los mensajes de estado arrojados a la consola del navegador utilizado para abrir la página.
2. Los componentes del código están generados con Sass para definir los estilos y Typescript como lenguaje. Se realizaron pruebas para implementar la internacionalización de texto i18n y el paquete de instalación se encuentra en el package.json pero queda pendiente para la implementación de forma correcta.
3. El maquetado cumple con los parámetros que se piden en el ejercicio. Se da por supuesto la libre utilización de Bootstrap dentro de los componentes HTML para ayudar a personalizar dichos parámetros.
4. La página cuenta con el botón de shuffle utilizado para intercambiar entre USD y BTC cumpliendo con la conversión propuesta. Al no contar con transmisión real-time de la página BraveNew Coin, se toman valores reales (1/11/2020) dados en USD, para crear lista dummy para realizar las diferentes conversiones, tanto en la página de Realizar Cambio, como para realizar cambio con la lista de monedas seleccionando de la lista top 20 de prueba, teneniendo como resultado una conversión exitosa de todas las 20 cryptomonedas. Esto posibilitará implementar la lista de scroll infinito con datos reales una vez se cuente con este endpoint desde la api.

### Automatización
El desarrollo de este ejercicio se centró en la base del desarrollo BackEnd y FrontEnd por lo cual, para el ejercicio de automatización necesitaría asesoría del equipo y/o tiempo en su defecto para investigar e implementar en este tema en el cual no se posee aún experiencia.
En cuanto a las preguntas que plantea el ejercicio, se responderá de forma general: Todas las funciones del desarrollo se pueden automatizar gracias a herramientas de automatización como Automation Anywhere y Serenity BDD+. Y todo es suceptible de ser automatizado a menos que se generen herramientas de verificación de humano como "captcha" para garantizar seguridad en los procesos.

## Pipelines en Azure
Se realizaron pipelines exitosamente en Azure DevOps para el FrontEnd. Allí se encuentra el código fuente al igual que en repositorio de Github: https://github.com/sebasbetap/desarrollo-fullstack.git

