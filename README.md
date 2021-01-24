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

Por otro lado, quiero destacar que he intentado usar <u>funciones de orden superior</u> tanto como ha sido posible y coherente con el código. Si bien hay varios ejemplos a lo largo de la práctica y de este README, puedo destacar un caso concreto como ejemplo: la creación de los *event handlers* que cambian el color del fondo cuando se hace focus en un input.

Estos *event handlers* han pasado por tres fases:

1. Creación de event handlers independientes, uno para cada evento y todos en el archivo website_forms.
~~~
  document.getElementById("suPassw").addEventListener("focusin", (e) => {
    e.target.style.background = "lightgrey";
  });
~~~

2. Creación de una lista con los ids de todos los inputs que requerían un event handler. El código empleado en este caso pasó a ser:
~~~
  for (let i = 0; i < arrayInputIds.length; i++) {
    document.getElementById(arrayInputIds[i]).addEventListener("focusin", (e) => {
      e.target.style.background = "rgba(142, 35, 27, 0.5)";
    });
  }
~~~

3. Conversión de este bucle en una función más elaborada:
~~~
  arrayInputIds.forEach((elemento) => {
    document.getElementById(elemento).addEventListener("focusin", (e) => {
      e.target.style.background = "rgba(142, 35, 27, 0.5)";
    });
  });
~~~

## Paleta de colores:
Los colores empleados son los mismos que en el proyecto original. El uso de tonos rojos como color principal implica que los errores y avisos se hace en un tono de contraste no rojo sino ocre.

## Archivos:
Como de costumbre he distribuido el código en diferentes archivos, según su contenido. Los archivos con los que he trabajado en esta práctica (para diferenciarlos de los de la práctica anterior) se encuentran en la carpeta js/modules y son los siguientes:

1. *website_forms.js*: incluye las operaciones principales y la gestión general de los formularios.
2. *forms_html.js*: genera el código html.
3. *forms_validation.mjs*: incluye las funciones de validación con las expresiones regulares.
4. *forms_validationArray.js*: genera los arrays y objetos necesarios para las operaciones.

Aparte he trabajado con los archivos de la carpeta *scss* y con la carpeta test; los comentaré en el apartado pertiente.

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

Tras investigar se vio que trata de un error propio de Chrome, ya que en otros navegadores no se recupera ([fuente](https://discourse.roots.io/t/mime-type-text-html-not-a-supported-stylesheet-mime-type/11636/8)).

## SCSS:
Se han preparado los estilos de los formularios en archivos de tipo scss, siguiendo las instrucciones del enunciado.

## Formulario de suscripción:
Este formulario, como el de log-in, se carga en un *div* del header, y se muestra sólo cuando se selecciona la opción de la cabecera. Aparece como un pseudo-overlay sobre la pantalla de la que se haya llamado.

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

Como detalle de desarrollo quiero destacar el funcionamiento de los ojos para visualizar las contraseñas. Lo he desarrollado de una forma un poco más compleja que la solicitada. Al hacer click en el ojo, con la contraseña oculta, se muestra el texto de la contraseña introducida y cambia el símbolo del ojo por uno tachado.

Al clicar ese ojo tachado se realiza la operación contraria.

Por otro lado, cabe señalar que las comprobaciones (es decir, los duplicados de contraseña y mail) sólo se activan cuando el valor a comprobar sea correcto.

Ni este formulario ni el de log realizan un *submit* como tal. En ambos casos utilizo *e.preventDefault()* (ver [fuente](https://www.stefanjudis.com/today-i-learned/requestsubmit-offers-a-way-to-validate-a-form-before-submitting-it/)) y opero según indica el enunciado. Aquí, por ejemplo, simplemente abro un aviso de éxito de subscripción cuando se envía correctamente, y muestro por consola el objeto creado.    

#### Lista de países:
El formulario de subscripción incluye una lista de países tomada de [esta API](https://restcountries.eu/rest/v2/all?fields=name), como indica el enunciado de la práctica; para entender cómo funciona XHR he partido de esta guía: https://javascript.info/xmlhttprequest.

Este desarrollo está en la función *generarHtmlPaises()* del archivo *forms_html.js*.

~~~
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all?fields=name");
xhr.responseType = "json";
xhr.send();
~~~

A continuación dentro de esta función hay una función anidada que se ejecuta cuando xhr.onload(); esta función es la que toma todos los valores de la respuesta de la API, en una matriz, y los reconvierte en el contenido de cada *option* del *select*:

~~~
  xhr.onload = function () {
    let listaPaises = xhr.response;
    for (let i = 0; i < listaPaises.length; i++) {
      let pais = listaPaises[i].name;
      if (pais == "Spain") {
        htmlPaises += "<option value='" + pais + "' selected='selected'>" + pais + "</option>";
      } else {
        htmlPaises += "<option value='" + pais + "'>" + pais + "</option>";
      }
    }
    document.getElementById("suCountry").innerHTML = htmlPaises;
  };
~~~

Al seguir trabajando con esta función advertí que era más apropiado pasarlo a un map(), con lo que reconvertí lo anterior en:

~~~
  xhr.onload = function () {
    let listaPaises = xhr.response;

    let htmlPaises  = listaPaises.map((elemento) => {
      let pais = elemento.name;
      if (pais == "Spain") {
        return "<option value='" + pais + "' selected='selected'>" + pais + "</option>";
      } else {
        return "<option value='" + pais + "'>" + pais + "</option>";
      }
    }).join();

    document.getElementById("suCountry").innerHTML = htmlPaises;
  };
~~~

#### Validaciones:
He planteado dos tipos de validaciones según su proceso: validaciones instantáneas al salir del campo de input, y validaciones que se realizan sólo al clicar el botón enviar.

Hay validaciones instantáneas en estos inputs:
* nombre de usuario
* contraseña
* comprobación de contraseña
* e-mail
* comprobación de e-mail

Esto implica que estos inputs tienen funciones de validación específicas que se lanzan cuando sucede un evento relacionado.

En cambio, se validan al enviar el formulario los siguientes campos:
* nombre
* apellido
* teléfono
* país
* edad

La validación de estos campos, por tanto, se realiza de una vez al enviar el formulario. Está codificado en la función validarSubmit(), que funciona de la siguiente manera: señala todos los errores en el texto, y si no los hay devuelve *true*.

Esta función ha tenido un desarrollo muy intenso. Originalmente la idea era ir comprobando todos los campos uno por uno. Luego evolucionó, con la creación de una lista de objetos en un archivo aparte, al siguiente código:

~~~
function validarSubmit(validacionFormulario) {
  //el parametro se pasa siempre en true; valido todo.
  let arrayValidacion = generarArrayParaValidacion();

  for (let i = 0; i < arrayValidacion.length; i++) {
    
    let resultadoValidacion = arrayValidacion[i].validar;
    
    if (resultadoValidacion == "VALIDATED") {
      marcarInputCorrecto(arrayValidacion[i].inputId, arrayValidacion[i].inputErrorId);
    } else {
      marcarInputError(arrayValidacion[i].inputId, arrayValidacion[i].inputErrorId, resultadoValidacion);
      validacionFormulario = false;
    }
  }

  return validacionFormulario;
}
~~~

Y finalmente avanzó a su formulación actual con una función de orden superior.

Más allá del momento de su lanzamiento, el desarrollo de las codificaciones concretas se encuentra en el archivo *forms_validation.js*. Estas validaciones son muy concretas y devuelven "VALIDATED" si el valor que comprueban es correcto, o un string con el error si no lo es.

## Formulario de login:
El formulario de *log in* se abre y cierra a través del menú. Para su diseño me he basado en la idea de 'ampliar' la propia barra de cabecera hacia abajo, mejorando su aspecto y diferenciándolo del resto del contenido a través de un fondo degradado del color rojo principal al negro. Una sombra muy difuminada en negro lanzada hacia abajo (y vagamente hacia la izquierda) mejora su separación del resto del contenido.

El formulario de *log in* tiene sólo dos campos: usuario y contraseña. Como en este punto del desarrollo todavía no tengo una base de datos de usuarios ni nada que me permita mantener la persistencia de los datos no compruebo que el usuario exista para hacer el *log in*, aunque la idea, eventualmente, sería que, tras comprobar la existencia del usuario y la coincidencia usuario-contraseña, se sustituyera el texto *log in* del *header* por el nombre de usuario para que, al hacer click, me llevara a una página específica del usuario.

El ojo para visualizar la contraseña funciona de forma diferente que en el formulario de subscripción. En este caso, he decidido que se verá el texto de la contraseña cuando el ratón pase por encima del ojo.

Por ahora, al hacer *click* en el botón tipo *submit* simplemente comprueba que usuario y contraseña sean válidos según las normas de validación del formulario de subscripción. Si no lo son, no sucede nada especial; si lo son, entiendo que se ha hecho bien el proceso, que el usuario hace *log in*, y se lo digo con un cuadro que se cierra automáticamente.

Existe también un botón 'cancelar' que cierra este formulario sin hacer *log in*. Esto es útil cuando se superponen diferentes pseudo-ventanas, como, por ejemplo, cuando se abren los dos formularios de esta práctica a la vez.

## Tests con Mocha:
Lo más complicado del desarrollo de los tests unitarios ha sido la preparación del entorno; en el momento tuve que abrir un *issue* con el tema, que tardé casi una semana en resolver.

Los tests se encuentran en el archivo tests/test.forms-validation.js y se ejecutan sobre funciones del archivo src/js/modules/forms_validation.mjs

Dado que en todos los casos he querido comprobar qué sucedía cuando el campo estaba vacío, repitiendo el mismo test para los diferentes parámetros, he preferido plantear más tests de los que pide el enunciado, a fin de comprobar todas las opciones que quería.

## Conclusiones:
Me he encontrado con bastantes problemas de tiempo al desarrollar este proyecto; el código era demasiado complejo para el tiempo del que disponía, especialmente dado que he tenido que introducir muchos cambios a lo largo de las semanas para aplicar las nuevas técnicas vistas en clase.

No obstante, estoy satisfecha con el proyecto terminado.