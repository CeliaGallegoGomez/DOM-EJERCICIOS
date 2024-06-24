import "../scss/styles.scss";

// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const titleElement = document.getElementById("start-point");
console.log(
 ` Soy un ${titleElement.tagName} con el id ${titleElement.id}, y la clase ${titleElement.className}. Mi padre es un ${titleElement.parentElement.tagName} con el id ${titleElement.parentElement.id} y la clase ${titleElement.parentElement.className}. Mi hermano es un ${titleElement.previousElementSibling.previousElementSibling.tagName} con el id ${titleElement.previousElementSibling.previousElementSibling.id} y clase ${titleElement.previousElementSibling.previousElementSibling.className}. Mi hermano ${titleElement.previousElementSibling.tagName} con id ${titleElement.previousElementSibling.id} y clase ${titleElement.previousElementSibling.className}.`
);

//- Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.

const ulChange = document.getElementById('first-list');

ulChange.children.textContent = 'Second List - Item 1';

const ulChangeDos = document.getElementById('second-list');
ulChangeDos.children.textContent ='First List - Item 1';


