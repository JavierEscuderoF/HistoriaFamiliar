// Lista de todas las referencias en orden de fecha.
let references = ["1"];

// En la página Documentos, cabeceras con números consecutivos
let init = 1;
Array.from(document.getElementsByClassName("doc-header")).forEach(a => a.innerText = init++);

// En las páginas con referencias, introduce el número correcto.
Array.from(document.getElementsByClassName("ref")).forEach(a => a.innerHTML = "<sup><a class='ref-a' href='../documentos.html#" + a.getAttribute("data-doc") + "'>" + (references.indexOf(a.getAttribute("data-doc")) + 1) + "</a></sup>" );