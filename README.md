# BalearicBuild_2021
Este repositorio recoge la práctica 3 de las asignaturas DWEC y DIW.
Para su desarrollo he partido del proyecto desarrollado [aquí](https://github.com/victoriapenasmiro/BalearicBuild_2021).

## Autor:
María Rabanales

## Tecnologías:
* HTML
* CSS
* SASS
* JavaScript
* Canvas
* Markdown
* JQuery (marginal)


## Observaciones generales:
Como punto de partida cabe destacar que este proyecto se ha desarrollado siguiendo las directrices de aspecto originales del proyecto, por lo que los formularios no se encuentran en una página separada sino que aparecen sobre cualquier página de la aplicación. 

El formulario de suscripción sigue un modelo semi-overlay. Al pulsar en el elemento *sign up* del *header*, la ventana se recubre por un fondo gris semiopaco sobre el que aparece el formulario, con un estilo similar al de la página. A diferencia de un *overlay* tradicional, no se cierra al hacer click con el ratón en cualquier punto de la página, ya que de ser así no se podría seleccionar ningún campo para rellenarlo; se cierra cuando se selecciona explícitamente esta opción.

El formulario de *log in* aparece y desaparece en la esquina superior derecha cuando se hace click en el elemento correspondiente del *header*, casi como si fuera una extensión que se abre del propio *header*.

## Fuentes:
El uso de fuentes específicas que pide el enunciado ya se había desarrollado en la entrega anterior del proyecto. He trabajado con dos fuentes externas.

La fuente principal del proyecto, [la tipografía Corleone](https://www.dafont.com/es/corleone.font), no es nativa de Google Fonts y debe instalarse previamente. Se emplea en títulos H1, H1, H3, logos, y otros elementos puntuales. Esta tipografía se ha cargado en el css general, y no en la cabecera de cada página con el objetivo de utilizarlo en todas las pantallas:

~~~
@font-face {
    font-family: "Corleone";
    src: url("/resources/fonts/Corleone.TTF");
}
~~~

Para la fuente de los textos que no son encabezados se emplea [la tipografía Open Sans](https://fonts.google.com/specimen/Open+Sans) de *Google Fonts*; es una tipografía limpia, clara y de fácil lectura.

Como se señaló en la práctica anterior, desde la consola de Chrome se obtiene el siguiente error con la fuente:

>Refused to apply style from 'http://127.0.0.1:5500/url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

Tras investigar se vio que trata de un error propio de Chrome, ya que en otros navegadores no se recupera [fuente](https://discourse.roots.io/t/mime-type-text-html-not-a-supported-stylesheet-mime-type/11636/8).

## SCSS:
//todo

## Formulario de suscripción:
//TODO


Respecto a la programación de los diferentes eventos, uno de los primeros problemas a los que me he enfrenado es que se ha deprecado 'event' en javascript puro. Esto implicaba tener una alerta realmente molesta a la hora de trabajar en fragmentos de código como el siguiente:

~~~
let varUsername = document.getElementById("suUsername");
varUsername.addEventListener("focusin", function() {
    ~~event~~.target.style.background = 'lightgrey';
});
~~~

Tras pensar bien en el tema decidí probar con funciones *arrow*, pasando el evento como parámetro. De esta manera el código anterior resulta en:

~~~
let varUsername = document.getElementById("suUsername");
varUsername.addEventListener("focusin", (e) => {
    e.target.style.background = 'lightgrey';
});
~~~

#### Validaciones:
He planteado dos tipos de validaciones según su proceso: validaciones instantáneas al salir del campo de input, y validaciones que se realizan sólo al clicar el botón enviar.

Hay validaciones instantáneas en estos inputs:
* nombre de usuario
* contraseña
* comprobación de contraseña
* e-mail
* comprobación de e-mail

En cambio, se validan al enviar el formulario los siguientes campos:
* nombre
* apellido
* teléfono
* país
* edad
//TODO comprobar que lo hace todo

Más allá del momento de su lanzamiento, el desarrollo de las codificaciones concretas se encuentra en el archivo *forms_validation.js*. 
//TODO completar

## Formulario de login:
//TODO

