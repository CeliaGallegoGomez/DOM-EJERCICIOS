import "../scss/styles.scss";

// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const titleElement = document.getElementById("start-point");




console.log(
  `Soy un ${titleElement.tagName} con el id ${titleElement.id} y ${titleElement.className}. Mi padre es un header con id ${titleElement.parent.id} y clase ${titleElement.parent.id}.Mi hermano ${titleElement.previousSibling.tagName} con id ${titleElement.previousSibling.id} y clase ${titleElement.previousSibling.tagName}
  "
`
);
