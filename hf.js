// Lista de todas las referencias en orden de fecha.
let references = ["20","3"];

// En la página Documentos, cabeceras con números consecutivos
let init = 1;
Array.from(document.getElementsByClassName("doc-header")).forEach(a => a.innerText = init++);

// En las páginas con referencias, introduce el número correcto.
Array.from(document.getElementsByClassName("ref")).forEach(a => a.innerText = "[" + (references.indexOf(a.id) + 1) + "]" );